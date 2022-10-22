import { IssueCommentEvent, PullRequestEvent } from "@octokit/webhooks-types"
import { Connection } from "@prisma/client"
import { formatAccountsToReslice } from "@utils/formatAccountsToReslice"
import getConnection from "@utils/getConnection"
import { getPinnedComment } from "@utils/getPinnedComment"
import { createComment } from "@utils/ghHandler"
import { proposeTransaction } from "@utils/proposeSafeTransaction"

export default async function onMerge(payload: PullRequestEvent) {
  const connection: Connection = await getConnection(payload.repository.id)
  const { slicerId, safeAddress } = connection
  const pinnedBotComment = await getPinnedComment(
    <PullRequestEvent & IssueCommentEvent>payload
  )

  if (pinnedBotComment) {
    const accountsToReslice = await formatAccountsToReslice(
      pinnedBotComment.body
    )

    if (accountsToReslice.length) {
      const status = await proposeTransaction(
        accountsToReslice,
        safeAddress,
        slicerId
      )

      const message =
        status == 201
          ? "Transaction has been proposed successfully on the gnosis safe 🎉"
          : "There was an error and the transaction has not been proposed on the Gnosis Safe. Please contact the project's maintainers."

      await createComment(
        payload.repository.owner.login,
        payload.repository.name,
        payload.pull_request.number,
        message,
        payload.installation.id
      )
    }
  }
}
