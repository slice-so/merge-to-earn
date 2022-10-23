import { provider } from "./initContracts"
import { Mint } from "./proposeSafeTransaction"

export const formatAccountsToReslice = async (message: string) => {
  const toFormatArray = message.match(
    /(\| ((0x[a-fA-F0-9]{40})|(.*\.eth \(0x[a-fA-F0-9]{3}___[a-fA-F0-9]{3}\))) \| ([0-9]*) \|)/g
  )

  const accountsToReslice: Mint[] = []

  for (let i = 0; i < toFormatArray.length; i++) {
    const [, address, slicesAmount] = toFormatArray[i].split("|")

    let formattedAddress = address

    if (address.split(" (0x").length == 2) {
      const ensAddress = address.split(" (0x")[0]
      formattedAddress = await provider.resolveName(ensAddress.trim())
    }

    accountsToReslice.push({
      account: formattedAddress.trim(),
      shares: Number(slicesAmount.trim())
    })
  }

  return accountsToReslice
}
