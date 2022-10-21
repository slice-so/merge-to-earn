import { PullRequestEvent } from "@octokit/webhooks-types"
import { createComment } from "@utils/ghHandler"
import { onPrOpenedMessage } from "@utils/ghMessages"
import { sliceCore, slicerId } from "@utils/initContracts"

export default async function onPrOpened(payload: PullRequestEvent) {
  console.log("on pr opened ---------")
  const totalSlices = Number(await sliceCore.totalSupply(slicerId))
  const author = payload.pull_request.user.login
  createComment(
    payload.repository.owner.login,
    payload.repository.name,
    payload.pull_request.number,
    onPrOpenedMessage(author, slicerId, totalSlices),
    payload.installation.id
  )
}
