import { IssueCommentEvent, PullRequestEvent } from "@octokit/webhooks-types"
import { controllerCheck } from "@utils/controllerCheck"
import { onPrOpenedMessage, onSlicesRequestMessage } from "@utils/ghMessages"
import { createComment, editComment } from "@utils/ghHandler"
import getConnection from "@utils/getConnection"
import { Connection } from "@prisma/client"
import { getPinnedComment } from "@utils/getPinnedComment"

export default async function onComment(payload: IssueCommentEvent) {
  const text: string = payload.comment.body
  const requiredText = "### Slice distribution request"

  if (text.includes(requiredText)) {
    const connection: Connection = await getConnection(payload.repository.id)
    const { slicerId, safeAddress } = connection

    const splitText = text.split("-")
    let botMessage: string

    const indexToStart =
      splitText.findIndex((el) => el.includes(requiredText)) + 1

    const author = payload.issue.user.login

    const pinnedBotComment = await getPinnedComment(
      <PullRequestEvent & IssueCommentEvent>payload
    )
    // Check if comment's user is the PR owner
    if (payload.comment.user.id === payload.issue.user.id) {
      // Set bot message to fire in create comment
      // m is defined based on success
      const [m, success, totalSlices] = await onSlicesRequestMessage(
        slicerId,
        splitText,
        indexToStart
      )
      botMessage = m

      // Edit first bot comment
      if (success) {
        const newFirstMessage =
          onPrOpenedMessage(author, slicerId, totalSlices) +
          "\n\n --- \n\n" +
          botMessage

        // If there is a pinned comment
        if (pinnedBotComment) {
          await editComment(
            payload.repository.owner.login,
            payload.repository.name,
            pinnedBotComment.id,
            newFirstMessage,
            payload.installation.id
          )
        } else {
          // check if safeAddress is the slicer controller
          await controllerCheck(slicerId, safeAddress)
          await createComment(
            payload.repository.owner.login,
            payload.repository.name,
            payload.issue.number,
            newFirstMessage,
            payload.installation.id
          )
        }
      }
    } else {
      botMessage =
        "User not authorized, only the PR owner can request slice distributions"
    }
    if (
      pinnedBotComment ||
      !botMessage.includes("### Upcoming slice distribution")
    ) {
      await createComment(
        payload.repository.owner.login,
        payload.repository.name,
        payload.issue.number,
        botMessage,
        payload.installation.id
      )
    }
  }
}
