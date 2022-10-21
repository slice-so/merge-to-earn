import { IssueCommentEvent, PullRequestEvent } from "@octokit/webhooks-types"
import { getComments } from "./ghHandler"

export const getPinnedComment = async (
  payload: PullRequestEvent & IssueCommentEvent
) => {
  const comments = await getComments(
    payload.repository.owner.login,
    payload.repository.name,
    payload.issue.number || payload.pull_request.number,
    payload.installation.id
  )
  const pinnedBotComment = comments.find(
    (el: any) =>
      el.user.login === "merge-to-earn[bot]" &&
      el.body.includes(`### 👋 Gm @${payload.issue.user.login}`)
  )
  return pinnedBotComment
}
