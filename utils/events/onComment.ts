import { IssueCommentEvent } from "@octokit/webhooks-types"
import { controllerCheck } from "@utils/controllerCheck"
import fetcher from "@utils/fetcher"
import { onPrOpenedMessage, onSlicesRequestMessage } from "@utils/ghMessages"

export default async function onComment(payload: IssueCommentEvent) {
  // TODO change slicer and safe
  const slicerId = "1"
  const safeAddress = "0xA8a3763a206D99d3b8bEc94d336F43FdEC3fC6F8"

  const text: string = payload.comment.body
  const requiredText = "### Slice distribution request"
  const splitText = text.split("-")
  let botMessage: string

  const commentPayload = <IssueCommentEvent>payload // type casting
  if (
    splitText[0].trim() === requiredText &&
    commentPayload.issue.state == "open"
  ) {
    const author = commentPayload.issue.user.login
    const comments = await fetcher(commentPayload.issue.comments_url)
    const firstBotComment = comments.find(
      (el: any) =>
        el.user.login === "github-actions[bot]" &&
        el.body.includes(`### 👋 Gm @${author}`)
    )

    // Check if comment's user is the PR owner
    if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
      // Set bot message to fire in create comment
      // m is defined based on success
      const [m, success, totalSlices] = await onSlicesRequestMessage(
        slicerId,
        splitText
      )
      botMessage = m
      // TODO: Add type checks on addresses and sliceAmounts
      // Edit first bot comment
      if (success) {
        const newFirstMessage =
          onPrOpenedMessage(author, slicerId, totalSlices) +
          "\n\n --- \n\n" +
          botMessage

        // If there is a pinned comment
        if (firstBotComment) {
          editComment(firstBotComment.id, newFirstMessage)
        } else {
          await controllerCheck(slicerId, safeAddress)
          createComment(commentPayload.issue.number, newFirstMessage)
        }
      }
    } else {
      botMessage =
        "User not authorized, only the PR owner can request slice distributions"
    }
    if (
      firstBotComment ||
      !botMessage.includes("### Upcoming slice distribution:")
    ) {
      createComment(commentPayload.issue.number, botMessage)
    }
  }
}
