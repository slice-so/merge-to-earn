import { IssueCommentEvent, PullRequestEvent } from "@octokit/webhooks-types"
import { getComments } from "./ghHandler"

export const getPinnedComment = async (
  payload: PullRequestEvent & IssueCommentEvent
) => {
  const { number, user } = payload.issue || payload.pull_request

  const comments = await getComments(
    payload.repository.owner.login,
    payload.repository.name,
    number,
    payload.installation.id
  )
  const pinnedBotComment = comments.find(
    (el: any) =>
      el.user.login === "merge-to-earn[bot]" &&
      el.body.includes(`### 👋 Gm @${user.login}`)
  )
  return pinnedBotComment
}
