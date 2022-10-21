import { sliceCore } from "./initContracts"

export const controllerCheck = async (
  slicerId: string | number,
  safeAddress: string
) => {
  if ((await sliceCore.controller(slicerId)) == safeAddress) {
    throw Error(`Specified safe is not controller of slicer ${slicerId}`)
  }
}
