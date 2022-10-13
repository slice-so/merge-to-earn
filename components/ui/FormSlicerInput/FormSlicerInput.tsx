import { Dispatch, SetStateAction, useState } from "react"
import { Input } from "@components/ui"
import Delete from "@components/icons/Delete"
import InputAddress from "../InputAddress"
import { SlicerOwner } from "../FormSlicer/FormSlicer"

type Props = {
  index: number
  totalShares: number
  slicerOwners: SlicerOwner[]
  setSlicerOwners: Dispatch<SetStateAction<SlicerOwner[]>>
  placeholder?: string
}

const FormSlicerInput = ({
  index,
  totalShares,
  slicerOwners,
  setSlicerOwners,
  placeholder = "1000000"
}: Props) => {
  const { address, shares: sharesAmount } = slicerOwners[index]

  const [resolvedAddress, setResolvedAddress] = useState("")

  const handleChangeAddress = (address: string) => {
    let items = [...slicerOwners]
    items[index].address = address
    setSlicerOwners(items)
  }

  const handleChangeShares = (shares: number) => {
    let items = [...slicerOwners]
    items[index].shares = shares
    setSlicerOwners(items)
  }

  const handleDelete = () => {
    let items = [...slicerOwners]
    items.splice(index, 1)
    setSlicerOwners(items)
  }

  return (
    <>
      <div className="col-span-1 col-start-1 mx-auto mb-3">
        <div>
          <Delete onClick={handleDelete} />
        </div>
      </div>
      <div className="col-span-7 xs:col-span-5 md:col-span-7">
        <InputAddress
          address={address}
          onChange={handleChangeAddress}
          required={sharesAmount != 0}
          resolvedAddress={resolvedAddress}
          setResolvedAddress={setResolvedAddress}
        />
      </div>
      <p className="col-span-3 pb-3 pr-2 text-sm font-medium text-right text-gray-600 xs:hidden">
        Slices
      </p>
      <div className="col-span-4 xs:col-span-3">
        <Input
          type="number"
          placeholder={placeholder}
          min="1"
          max="1000000000"
          error={sharesAmount > 1000000000}
          value={sharesAmount != 0 ? sharesAmount : ""}
          required={address && true}
          onChange={handleChangeShares}
        />
      </div>
      <div className="mb-3 -ml-1 xs:ml-0">
        <p
          className={`col-span-2 xs:col-span-1 text-xs text-green-600 font-bold`}
        >
          {sharesAmount != 0 &&
            Math.floor((Number(sharesAmount) / totalShares) * 10000) / 100 +
              "%"}
        </p>
      </div>
      <hr className="w-20 col-span-8 mx-auto my-6 border-gray-300 xs:hidden" />
    </>
  )
}

export default FormSlicerInput
