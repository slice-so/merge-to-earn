import { ethers } from "ethers"
import { SliceCore } from "../types/SliceCore"
import { GnosisSafe } from "../types/GnosisSafe"
import { sliceCoreInterface } from "../abi/SliceCore"
import { gnosisSafeInterface } from "../abi/GnosisSafe"

// TODO remove slicerId and safe address
export const slicerId = 1
export const safeAddress = "0xA8a3763a206D99d3b8bEc94d336F43FdEC3fC6F8"

export const sliceCoreAddress = process.env.NEXT_PUBLIC_SLICECORE
const alchemyId = process.env.ALCHEMY_ID
export const provider = new ethers.providers.AlchemyProvider(
  process.env.NEXT_PUBLIC_ENV,
  alchemyId
)

export const sliceCore = new ethers.Contract(
  sliceCoreAddress,
  sliceCoreInterface.abi,
  provider
) as SliceCore

export const safe = new ethers.Contract(
  safeAddress,
  gnosisSafeInterface.abi,
  provider
) as GnosisSafe

// export const mteWallet = new ethers.Wallet(String(process.env.PK))
