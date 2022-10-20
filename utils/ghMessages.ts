import formatNumber from "./formatNumber"
import { sliceCore } from "./initContracts"
import { resolveEns, isValidAddress } from "./resolveEns"

export const baseReviewMessage =
  "Please review your request and submit it again."

export function onPrOpenedMessage(
  author: string,
  slicerId: string,
  totalSlices: number
) {
  const today = new Date()
  return `### 👋 Gm @${author}

  This repository uses [Merge to earn](...) to reward contributors, and is represented by [Slicer #${slicerId}](slice.so/slicer/${slicerId}).
  
  When merging a pull request, contributors receive an agreed number of **slices** representing ownership over the project and its earnings. Funds will then be claimable on [slice.so](slice.so).
  
  To request slices, comment with the following message by specifying the **Ethereum addresses** of the contributors involved and the **desired amount of slices** for each.
  
  \`\`\`
  ### Slice distribution request
  
  - contributor.eth : 1000
  - 0x... : 500
  - reviewer.eth : 50
  \`\`\`
  
  > Total slices on ${today.toDateString()}: ${formatNumber(totalSlices)}
  `
}

// TODO fix params type
export async function onSlicesRequestMessage(
  slicerId: string,
  splitText: any
): Promise<[string, boolean, number]> {
  let slicesToBeMinted = 0
  let isSuccess = false
  let totalSlices = 0
  const newSplitText = splitText.slice(1)
  const resolvedArray = []

  for (let i = 0; i < newSplitText.length; i++) {
    const el: string = newSplitText[i]
    const [address, sliceAmount] = el.split(":")
    if (Number(sliceAmount)) {
      if (isValidAddress(address)) {
        const resolved = await resolveEns(address)
        if (resolved) {
          slicesToBeMinted += Number(sliceAmount)
          resolvedArray.push(
            "| " + resolved.trim() + " | " + sliceAmount.trim() + " |"
          )
        } else {
          return [
            "ENS not resolved to address.\n" + baseReviewMessage,
            isSuccess,
            totalSlices
          ]
        }
      } else {
        return [
          "Invalid address or message format.\n" + baseReviewMessage,
          isSuccess,
          totalSlices
        ]
      }
    } else {
      return [
        "Invalid number of slices or message format.\n" + baseReviewMessage,
        isSuccess,
        totalSlices
      ]
    }
  }
  isSuccess = true

  totalSlices = Number(await sliceCore.totalSupply(slicerId))

  return [
    "### Upcoming slice distribution: \n| Address | Slices |\n| --- | --- |\n" +
      resolvedArray.join(" \n ") +
      "\n \n **Slices to be minted: **" +
      String(slicesToBeMinted) +
      `(${
        Math.floor(
          (slicesToBeMinted / (totalSlices + slicesToBeMinted)) * 100000
        ) / 1000
      }% of ${formatNumber(totalSlices + slicesToBeMinted)} new total slices)`,
    isSuccess,
    totalSlices
  ]
}
