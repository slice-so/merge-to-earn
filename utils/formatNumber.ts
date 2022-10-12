const formatNumber = (number: number, decimals = 1) => {
  const SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"]
  const tier = (Math.log10(Math.abs(number)) / 3) | 0
  if (tier == 0) return number
  const suffix = SI_SYMBOL[tier]
  const scale = Math.pow(10, tier * 3)
  const scaled = number / scale

  const roundFactor = Math.pow(10, decimals)
  const formatted = Math.floor(scaled * roundFactor) / roundFactor
  return String(formatted) + suffix
}

export default formatNumber
