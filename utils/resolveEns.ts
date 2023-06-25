import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ethers } from "ethers"
import { PublicClient } from "viem"

const resolveEns = async (
  provider: PublicClient,
  address: `0x${string}`,
  setAddress: Dispatch<SetStateAction<string | null>>
) => {
  if (address) {
    try {
      const resolved =
        address.substring(address.length - 4) !== ".eth"
          ? await provider.getEnsName({ address })
          : await provider.getEnsAddress({ name: address })
      if (address.substring(address.length - 4) === ".eth" && !resolved) {
        throw Error
      }
      setAddress(resolved)
    } catch (err) {
      setAddress("Invalid ENS name")
    }
  }
}

export const useEns = (provider: PublicClient, address: `0x${string}`) => {
  const [resolvedAddress, setResolvedAddress] = useState<string | null>("")
  useEffect(() => {
    resolveEns(provider, address, setResolvedAddress)
  }, [address])
  return !resolvedAddress || resolvedAddress == "Invalid ENS name"
    ? null
    : resolvedAddress
}

export default resolveEns
