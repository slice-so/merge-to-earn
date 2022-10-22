import { PullRequestEvent } from "@octokit/webhooks-types"
import { Connection } from "@prisma/client"
import getConnection from "@utils/getConnection"
import { createComment } from "@utils/ghHandler"
import { onPrOpenedMessage } from "@utils/ghMessages"
import { sliceCore } from "@utils/initContracts"

export default async function onPrOpened(payload: PullRequestEvent) {
  const connection: Connection = await getConnection(payload.repository.id)
  const { slicerId } = connection
  const totalSlices = Number(await sliceCore.totalSupply(slicerId))
  const author = payload.pull_request.user.login
  await createComment(
    payload.repository.owner.login,
    payload.repository.name,
    payload.pull_request.number,
    onPrOpenedMessage(author, slicerId, totalSlices),
    payload.installation.id
  )
}
