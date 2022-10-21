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

  // TODO: Can I skip this call? Can I get installationId from elsewhere, for example when authorizing the user?
  const installationList = await fetcher(
    "https://api.github.com/user/installations",
    body
  )
  const installationId = installationList.installations.find(
    (installation) => Number(installation.app_id) == 247870
  ).id

  const data = await fetcher(
    `https://api.github.com/user/installations/${installationId}/repositories`,
    body
  )

  res.status(200).json({ installationId, data })
}

export default handler
