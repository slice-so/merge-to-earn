import type { NextApiRequest, NextApiResponse } from "next"
import { Webhooks } from "@octokit/webhooks"
import onComment from "@utils/events/onComment"
import onMerge from "@utils/events/onMerge"
import onPrOpened from "@utils/events/onPrOpened"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body
  const webhooks = new Webhooks({
    secret: process.env.GH_WEBHOOKS_SECRET
  })
  const verified = await webhooks.verify(
    body,
    <string>req.headers["x-hub-signature-256"]
  )

  // console.log(body)

  /**
   * If the request is verified the following EVENTS are handled:
   * PR Opened
   * PR Merged
   * Comments on PR with state open
   */
  const isPullRequestOpened = body.pull_request && body?.action == "opened"
  const isPullRequestMerged = body.pull_request?.merged == true
  const isCommentOnPR = body.issue?.state == "open" && body.comment

  if (verified) {
    isCommentOnPR
      ? onComment(body)
      : isPullRequestOpened
      ? onPrOpened(body)
      : isPullRequestMerged
      ? onMerge(body)
      : res.status(400).json({ message: "Event not found" })

    res.status(200).json({ message: "OK" })
  } else {
    res.status(401).json({ message: "Anautorizhed" })
  }
}
