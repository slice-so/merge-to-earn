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

  console.log(2)
  if (pinnedBotComment) {
    const accountsToReslice = await formatAccountsToReslice(
      pinnedBotComment.body
    )
    console.log(3)

    if (accountsToReslice.length) {
      const status = await proposeTransaction(
        accountsToReslice,
        safeAddress,
        slicerId
      )
      console.log(4)

      const message =
        status == 201
          ? "Successfully proposed transaction on the Gnosis Safe 🎉"
          : "Due to an unexpected issue the transaction has not been proposed on the Gnosis Safe. Please contact the project's maintainers."

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
