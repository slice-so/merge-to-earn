const throttleFunction = (
  executeFunction: any,
  clearFunction: any,
  ms: number
) => {
  const timeout = setTimeout(() => executeFunction, ms)
  return () => {
    clearTimeout(timeout)
    clearFunction
  }
}

export default throttleFunction
