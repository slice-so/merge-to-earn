import Delete from "@components/icons/Delete"
import { Dispatch, SetStateAction, useState } from "react"
import InputAddress from "../InputAddress"

type Props = {
  index: number
  currencies: string[]
  setCurrencies: Dispatch<SetStateAction<string[]>>
}

const FormSlicerCurrencyAddress = ({
  index,
  currencies,
  setCurrencies
}: Props) => {
  const [resolvedAddress, setResolvedAddress] = useState("")

  const handleChange = (value: string) => {
    let items = [...currencies]
    items[index] = value
    setCurrencies(items)
  }

  const handleDelete = () => {
    let items = [...currencies]
    items.splice(index, 1)
    setCurrencies(items)
  }

  return (
    <>
      <div className="col-span-1 col-start-1 mx-auto mb-3">
        <div className="">
          <Delete onClick={() => handleDelete()} />
        </div>
      </div>
      <div className="col-span-9 col-start-2 ">
        <InputAddress
          address={currencies[index]}
          onChange={handleChange}
          resolvedAddress={resolvedAddress}
          setResolvedAddress={setResolvedAddress}
          placeholder="0x…"
          required
        />
      </div>
    </>
  )
}

export default FormSlicerCurrencyAddress
