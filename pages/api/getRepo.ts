import { Installation } from "@octokit/webhooks-types"
import fetcher from "@utils/fetcher"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query

  const Authorization = "Bearer " + token
  const body = {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization
    },
    method: "GET"
  }

  const installationList = await fetcher(
    "https://api.github.com/user/installations",
    body
  )

  const appInstallations: Installation[] =
    installationList.installations.filter(
      (installation: Installation) =>
        String(installation.app_id) == process.env.GH_APP_ID
    )

  const data = await Promise.all(
    appInstallations.map((installation) =>
      fetcher(
        `https://api.github.com/user/installations/${installation.id}/repositories`,
        body
      )
    )
  )

  res.status(200).json(
    data.map((repo, i) => {
      repo["installation_id"] = appInstallations[i].id
      return repo
    })
  )
}

export default handler
