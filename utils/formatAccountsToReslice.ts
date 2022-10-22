import { Mint } from "./proposeSafeTransaction"

export const formatAccountsToReslice = (message: string) => {
  const toFormatArray = message.match(
    /(\| ((0x[a-fA-F0-9]{40})|.*\.eth) \| ([0-9]*) \|)/g
  )

  return toFormatArray.map((el) => {
    const [, address, slicesAmount] = el.split("|")

    return {
      account: address.trim(),
      shares: Number(slicesAmount.trim())
    } as Mint
  })
}
