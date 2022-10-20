import type { NextApiRequest, NextApiResponse } from "next"
import { Webhooks } from "@octokit/webhooks"
import onComment from "@utils/events/onComment"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body
  const webhooks = new Webhooks({
    secret: process.env.WEBHOOKS_SECRET
  })
  const verified = await webhooks.verify(
    body,
    <string>req.headers["x-hub-signature-256"]
  )

  /**
   * If the request is verified the following events are handled:
   * PR Opened
   * PR Merged
   * Comments on PR with state open
   */

  if (verified) {
    if (body.pull_request) {
      if (body.action == "opened") {
        console.log("---PR OPENED---")
      } else if (body.pull_request.merged == true) {
        console.log("---PR MERGED---")
      }
    } else if (body.issue.state == "open" && body.comment) {
      onComment(body)
    }

    res.status(200).json({ message: "OK" })
  } else {
    res.status(401).json({ message: "Anautorizhed" })
  }
}
