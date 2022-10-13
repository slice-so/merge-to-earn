import { useEffect, Dispatch, SetStateAction, useState } from "react"
import { Input } from "@components/ui"
import Delete from "@components/icons/Delete"
import UserIcon from "@components/icons/UserIcon"
import { useAppContext } from "@components/ui/context"
import InputAddress from "../InputAddress"
import resolveEns from "@utils/resolveEns"

type Props = {
  index: number
  addresses: string[]
  shares: number[]
  totalShares: number
  removedCount: number
  setAddresses: Dispatch<SetStateAction<string[]>>
  setShares: Dispatch<SetStateAction<number[]>>
  setTotalShares: Dispatch<SetStateAction<number>>
  setRemovedCount: Dispatch<SetStateAction<number>>
  signerAddress?: string
  ownedSlices?: number
  placeholder?: string
}

const FormSlicerInput = ({
  index,
  signerAddress,
  addresses,
  shares,
  totalShares,
  setAddresses,
  setShares,
  setTotalShares,
  removedCount,
  setRemovedCount,
  ownedSlices,
  placeholder = "1000000"
}: Props) => {
  const { account, provider } = useAppContext()

  const [visible, setVisible] = useState(true)
  const [address, setAddress] = useState(addresses[index] || "")
  const [resolvedAddress, setResolvedAddress] = useState("")
  const [sharesAmount, setSharesAmount] = useState(shares[index] || 0)
  const [resolvedSignerAddress, setResolvedSignerAddress] = useState("")

  const handleChange = (
    value: string | number,
    currentState: string[] | number[],
    setState: Dispatch<SetStateAction<string[] | number[]>>
  ) => {
    let items = currentState
    items[index] = value
    setState(items)
  }

  const handleRemove = () => {
    setSharesAmount(0)
    setAddress("")
    let tempShares = shares
    let tempAddresses = addresses
    setShares(tempShares)
    setAddresses(tempAddresses)
    setVisible(false)
    setRemovedCount(removedCount + 1)
  }

  useEffect(() => {
    if (index == 0 && address == "" && signerAddress) {
      setAddress(signerAddress)
      resolveEns(provider, signerAddress, setResolvedSignerAddress)
    }
  }, [signerAddress])

  useEffect(() => {
    handleChange(address, addresses, setAddresses)
  }, [address])

  useEffect(() => {
    handleChange(Number(sharesAmount), shares, setShares)
    setTotalShares(
      shares.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    )
  }, [sharesAmount])

  return (
    visible && (
      <>
        <div className="col-span-1 col-start-1 mx-auto mt-3 mb-3">
          <div className="">
            <Delete onClick={handleRemove} />
          </div>
        </div>
        <div className="col-span-7 pt-3 xs:col-span-5 md:col-span-7">
          <InputAddress
            address={address}
            onChange={setAddress}
            required={sharesAmount != 0}
            resolvedAddress={resolvedAddress}
            setResolvedAddress={setResolvedAddress}
          />
        </div>
        <p className="col-span-2 pr-2 text-right xs:hidden">Slices</p>
        <div className="col-span-4 pt-3 xs:col-span-3">
          <Input
            type="number"
            placeholder={placeholder}
            min="1"
            max="4000000000"
            error={sharesAmount > 4000000000}
            value={sharesAmount != 0 ? sharesAmount : ""}
            required={address && true}
            onChange={setSharesAmount}
          />
        </div>
        <div className="mt-3 mb-3">
          <p
            className={`col-span-2 xs:col-span-1 text-sm text-green-600 font-bold`}
          >
            {sharesAmount != 0 &&
              Math.floor((Number(sharesAmount) / totalShares) * 10000) / 100 +
                "%"}
          </p>
        </div>
        <hr className="w-20 col-span-8 mx-auto my-6 border-gray-300 xs:hidden" />
      </>
    )
  )
}

export default FormSlicerInput
