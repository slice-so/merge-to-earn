import { PullRequestEvent } from "@octokit/webhooks-types"
import { Connection } from "@prisma/client"
import getConnection from "@utils/getConnection"
import { createComment } from "@utils/ghHandler"
import { proposeTransaction, Mint } from "@utils/proposeSafeTransaction"

export default async function onMerge(payload: PullRequestEvent) {
  const connection: Connection = await getConnection(payload.repository.id)
  const { slicerId, safeAddress } = connection
  const accountsToReslice = [
    { account: "0xAe009d532328FF09e09E5d506aB5BBeC3c25c0FF", shares: 10 }, // test tx
    { account: "0xA8a3763a206D99d3b8bEc94d336F43FdEC3fC6F8", shares: 20 } // test tx
  ]

  if (accountsToReslice.length) {
    const status = await proposeTransaction(
      accountsToReslice,
      safeAddress,
      slicerId
    )

    const message =
      status == 201
        ? "Transaction has been proposed successfully on the gnosis safe 🎉🎉🎉"
        : "Transaction has not been proposed on the gnosis safe. Please contact the project's maintainers."

    createComment(
      payload.repository.owner.login,
      payload.repository.name,
      payload.pull_request.number,
      message,
      payload.installation.id
    )
  }
}
