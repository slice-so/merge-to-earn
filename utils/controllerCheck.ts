import { sliceCore } from "./initContracts"

export const controllerCheck = async (
  slicerId: string | number,
  safeAddress: string
) => {
  const controller = await sliceCore.controller(slicerId)
  if (controller != safeAddress) {
    throw Error(`Specified safe is not controller of slicer ${slicerId}`)
  }
}
