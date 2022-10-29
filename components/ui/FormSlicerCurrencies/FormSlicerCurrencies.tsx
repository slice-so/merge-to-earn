"use client"

import React, { Dispatch, SetStateAction } from "react"
import Add from "@components/icons/Add"
import FormSlicerCurrencyAddress from "../FormSlicerCurrencyAddress"

type Props = {
  currencies: string[]
  setCurrencies: Dispatch<SetStateAction<string[]>>
}

const FormSlicerCurrencies = ({ currencies, setCurrencies }: Props) => {
  return (
    <div className="text-left">
      <div className="pb-3">
        <p className="pb-1 font-semibold">Accepted currencies</p>
        <p className="text-sm text-gray-500">
          Choose which ERC20 currencies the Slicer should accept besides ETH.
        </p>
      </div>

      <div className="grid items-center grid-cols-8 xs:grid-cols-10 md:grid-cols-12 gap-x-4 gap-y-3 xs:gap-y-4">
        {currencies.length != 0 && (
          <p className="col-span-6 col-start-2 pt-2 text-sm font-semibold text-gray-600 xs:-mb-2">
            ERC20 contract addresses
          </p>
        )}
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
      </div>
      <div className="mt-4 inline-flex ml-[9px] text-green-500 group">
        <Add
          onClick={() => setCurrencies([...currencies, ""])}
          className="mr-3 cursor-pointer opacity-80 group-hover:opacity-100"
        />
        <p
          className="font-medium cursor-pointer opacity-80 group-hover:opacity-100"
          onClick={() => setCurrencies([...currencies, ""])}
        >
          Add currency
        </p>
      </div>
      {currencies.length != 0 && (
        <p className="pt-6 text-sm font-medium text-yellow-600">
          Note: Each currency slightly increases the gas costs on PR merge.
        </p>
      )}
    </div>
  )
}

export default FormSlicerCurrencies
