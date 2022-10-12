import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ethers } from "ethers"

const resolveEns = async (
  provider: ethers.providers.BaseProvider,
  address: string,
  setAddress: Dispatch<SetStateAction<string>>
) => {
  if (address) {
    try {
      const resolved =
        address.substring(address.length - 4) !== ".eth"
          ? await provider.lookupAddress(address)
          : await provider.resolveName(address)
      if (address.substring(address.length - 4) === ".eth" && !resolved) {
        throw Error
      }
      setAddress(resolved)
    } catch (err) {
      setAddress("Invalid ENS name")
    }
  }
}

export const useEns = (
  provider: ethers.providers.BaseProvider,
  address: string
) => {
  const [resolvedAddress, setResolvedAddress] = useState("")
  useEffect(() => {
    resolveEns(provider, address, setResolvedAddress)
  }, [address])
  return !resolvedAddress || resolvedAddress == "Invalid ENS name"
    ? null
    : resolvedAddress
}

export default resolveEns
