import Add from "@components/icons/Add"
import { FormSlicerCurrencies, FormSlicerInput, Question } from "@components/ui"
import fetcher from "@utils/fetcher"
import { Message } from "@utils/handleMessage"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import useSWR from "swr"
import { useAppContext } from "../context"

type Props = {
  // baseUrl: string
  // safeAddress: string
  // setSafeAddress: Dispatch<SetStateAction<string>>
  // message: Message
}

const FormSlicer = ({}: Props) => {
  const { account } = useAppContext()
  const [initAddress, setInitAddress] = useState("")
  const [inputCount, setInputCount] = useState(1)
  const [removedCount, setRemovedCount] = useState(0)
  const [totalShares, setTotalShares] = useState(1000000)
  const [addresses, setAddresses] = useState([""])
  const [shares, setShares] = useState([1000000])

  useEffect(() => {
    setInitAddress(account)
  }, [account])

  // useEffect(() => {
  //   if (success) {
  //     resetInputs()
  //   }
  // }, [success])

  // const resetInputs = () => {
  //   setInputCount(1)
  //   setRemovedCount(0)
  //   setAddresses([initAddress])
  //   setShares([1000000])
  //   setMinimumShares(0)
  //   setTotalShares(1000000)
  // }

  return (
    <div className="space-y-10">
      <p className="pt-6 text-left">
        As a slicer controller, the safe will be able to allow the slicer to
        accept other currencies besides ETH, or sell products on its
        decentralized storefront.
      </p>
      <div className="grid items-center grid-cols-8 text-left xs:grid-cols-10 md:grid-cols-12 gap-x-4 gap-y-4 xs:gap-y-6">
        <p className="mb-[-25px] text-sm text-gray-700 font-semibold hidden xs:block xs:col-span-5 xs:col-start-2 md:col-span-7 md:col-start-2">
          Addresses
        </p>
        <div className="mb-[-25px] text-gray-700 relative items-center hidden xs:flex">
          <p className="pr-1 text-sm font-semibold">Slices</p>
          <Question
            text={
              <>
                <p>
                  Slices 🍰 represent ownership over a slicer and its earnings.
                </p>
                <p>
                  The total number of slices defines the{" "}
                  <b>minimum divisible unit of ownership</b>.{" "}
                  {totalShares ? (
                    <>
                      With the current setup,{" "}
                      <b>
                        1 Slice ={" "}
                        {Math.floor((1 / totalShares) * 1000000000) / 10000000}%
                      </b>{" "}
                      of ownership.
                    </>
                  ) : (
                    <>
                      If a slicer has 100 slices, <b>1 Slice = 1%</b> of
                      ownership.
                    </>
                  )}
                </p>
              </>
            }
            position="bottom-0 right-[-35px]"
          />
        </div>
        {[...Array(inputCount)].map((el, key) => {
          const i = key
          return (
            <FormSlicerInput
              key={key}
              index={i}
              signerAddress={initAddress}
              addresses={addresses}
              shares={shares}
              totalShares={totalShares}
              removedCount={removedCount}
              setAddresses={setAddresses}
              setShares={setShares}
              setTotalShares={setTotalShares}
              setRemovedCount={setRemovedCount}
            />
          )
        })}

        <div className="col-span-1 col-start-1 mx-auto ">
          <Add
            onClick={() => setInputCount(inputCount + 1)}
            className="text-green-500 opacity-75 cursor-pointer hover:opacity-100"
          />
        </div>

        <div className="col-span-7 py-3 pr-2 text-left text-green-500 xs:col-span-6 md:col-span-6">
          <p
            className="inline-block font-semibold opacity-75 cursor-pointer hover:opacity-100"
            onClick={() => setInputCount(inputCount + 1)}
          >
            Add slicer owner
          </p>
        </div>
        <FormSlicerCurrencies />
      </div>
    </div>
  )
}

export default FormSlicer
