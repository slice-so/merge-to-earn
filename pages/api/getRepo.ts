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
  const data = await fetcher("https://api.github.com/user/installations", body)
  res.status(200).json(data)
}

export default handler
