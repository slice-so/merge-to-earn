import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Question } from "@components/ui"
import Add from "@components/icons/Add"
import FormSlicerCurrencyAddress from "../FormSlicerCurrencyAddress"

type Props = {}

const FormSlicerCurrencies = ({}: Props) => {
  const [currencies, setCurrencies] = useState([""])

  useEffect(() => console.log(currencies), [currencies])

  return (
    <>
      <p className="col-span-10 pt-2 font-semibold text-center text-yellow-600">
        Add slicer supported ERC20
      </p>

      <div className="relative flex items-center col-span-10 text-gray-700 xs:col-start-2">
        <div className="mb-[-25px] text-gray-700 relative items-center hidden xs:flex">
          <p className="pr-1 text-sm font-semibold">Contract address</p>
          <Question
            text={
              <>
                <p>
                  Slices 🍰 represent ownership over a slicer and its earnings.
                </p>
                <p>
                  The total number of slices defines the{" "}
                  <b>minimum divisible unit of ownership</b>.{" "}
                </p>
                <p>
                  There is no right or wrong amount, the only effect is to
                  increase/reduce partial ownership that owners may trade in the
                  open market (nft marketplaces).
                </p>
                <p>
                  If the displayed percentage is green, the owner is also a
                  superowner (see below to learn more).
                </p>
              </>
            }
            position="bottom-0 right-[-35px]"
          />
        </div>
      </div>
      {currencies.map((currency, index) => {
        return (
          <FormSlicerCurrencyAddress
            key={index}
            currencies={currencies}
            setCurrencies={setCurrencies}
            index={index}
          />
        )
      })}
      <div className="col-span-1 col-start-1 mx-auto ">
        <Add onClick={() => setCurrencies([...currencies, ""])} />
      </div>

      <div className="col-span-7 py-3 pr-2 text-left text-green-500 xs:col-span-6 md:col-span-6">
        <p
          className="inline-block font-semibold opacity-75 cursor-pointer hover:opacity-100"
          onClick={() => setCurrencies([...currencies, ""])}
        >
          Add currency
        </p>
      </div>
    </>
  )
}

export default FormSlicerCurrencies
