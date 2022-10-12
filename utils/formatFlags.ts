export const formatFlags = (flags: boolean[]) => {
  let formattedFlags = 0

  flags.forEach((el, index) => {
    if (el) {
      formattedFlags += 2 ** index
    }
  })

  return formattedFlags
}
