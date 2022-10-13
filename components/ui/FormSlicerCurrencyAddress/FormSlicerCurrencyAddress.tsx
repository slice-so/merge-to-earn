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
    let items = currencies
    items[index] = value
    setCurrencies(items)
  }

  const handleDelete = (index: number) => {
    let items = currencies
    items.splice(index, 1)
    setCurrencies(items)
  }

  return (
    <>
      <div className="col-span-1 col-start-1 mx-auto mt-3 mb-3">
        <div className="">
          {index != 0 && <Delete onClick={() => handleDelete(index)} />}
        </div>
      </div>
      <div className="col-span-8 col-start-2 pt-3">
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
