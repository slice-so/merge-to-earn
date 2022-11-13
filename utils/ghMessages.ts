import formatNumber from "./formatNumber"
import { provider, sliceCore } from "./initContracts"

export const resolveEnsForBot = async (address: string) => {
  let resolved: string
  if (address.substring(address.length - 4) == ".eth") {
    const resolvedAddress = await provider.resolveName(address)
    if (resolvedAddress) {
      resolved = `${address} (${resolvedAddress.replace(
        resolvedAddress.substring(5, resolvedAddress.length - 3),
        `___`
      )})`
    }
  } else {
    resolved = address
  }
  return resolved
}

export const isValidAddress = (address: string) => {
  return address.match(/^(0x[a-fA-F0-9]{40})$|\.eth$/)
}

export const baseReviewMessage =
  "Please review your request and submit it again."

export function onPrOpenedMessage(
  author: string,
  slicerId: string | number,
  totalSlices: number
) {
  const today = new Date()
  return `### 👋 Gm @${author}

  This repository uses [Merge to earn](https://github.com/slice-so/merge-to-earn) to reward contributors with a piece of [Slicer #${slicerId}](https://slice.so/slicer/${slicerId}).
  
  When merging a pull request, contributors can **receive an agreed number of slices 🍰 (ERC1155 tokens) representing ownership over the project and its earnings**. 
  
  Funds earned can be claimed anytime on [slice.so](https://slice.so) while slices can be transferred and managed from either the Slice website or directly from your ETH wallet.

  ---
  
  To request slices, comment using this template by specifying the **Ethereum addresses** of the contributors involved and the **desired amount of slices** for each.
  
  \`\`\`
  Include any optional details related to your request here.
  
  ### Slice distribution request
  
  - contributor.eth : 1000
  - 0x... : 500
  - reviewer.eth : 50
  \`\`\`
  
  > Current total slices (${today.toDateString()}): ${formatNumber(totalSlices)}
  `
}

// TODO fix params type
export async function onSlicesRequestMessage(
  slicerId: string | number,
  splitText: string[],
  indexToStart: number
): Promise<[string, boolean, number]> {
  let slicesToBeMinted = 0
  let isSuccess = false
  let totalSlices = 0
  const newSplitText = splitText.slice(indexToStart)
  const resolvedArray = []

  for (let i = 0; i < newSplitText.length; i++) {
    const el: string = newSplitText[i]
    const [addressTt, sliceAmountTt] = el.split(":")
    const address = addressTt.trim()
    const sliceAmount = sliceAmountTt.trim()
    if (Number(sliceAmount)) {
      if (isValidAddress(address)) {
        const resolved = await resolveEnsForBot(address)
        if (resolved) {
          slicesToBeMinted += Number(sliceAmount)
          resolvedArray.push("| " + resolved + " | " + sliceAmount + " |")
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
    "### Scheduled slice distribution \n| Address | Slices |\n| --- | --- |\n" +
      resolvedArray.join(" \n ") +
      "\n \n > **Slices to be minted:** " +
      String(slicesToBeMinted) +
      ` (${
        Math.floor(
          (slicesToBeMinted / (totalSlices + slicesToBeMinted)) * 100000
        ) / 1000
      }% of ${formatNumber(
        totalSlices + slicesToBeMinted
      )} future total slices)`,
    isSuccess,
    totalSlices
  ]
}
