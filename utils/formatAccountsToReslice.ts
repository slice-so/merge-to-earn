import { Mint } from "./proposeSafeTransaction"

export const formatAccountsToReslice = (message: string) => {
  // "### Upcoming slice distribution: \n| Address | Slices |\n| --- | --- |\n| 0xAE38a794E839D045460839ABe288a8e5C28B0fc6 | 10 |\n| jacopo.eth | 20 |"

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
