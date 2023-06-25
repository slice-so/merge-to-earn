import Add from "@components/icons/Add"
import { FormSlicerCurrencies, FormSlicerInput, Question } from "@components/ui"
import saEvent from "@utils/saEvent"
import { Dispatch, SetStateAction, useEffect } from "react"
import { useAppContext } from "../context"

export type SlicerOwner = {
  account: string
  shares: number
}

type Props = {
  success: boolean
  slicerOwners: SlicerOwner[]
  setSlicerOwners: Dispatch<SetStateAction<SlicerOwner[]>>
  currencies: `0x${string}`[]
  setCurrencies: Dispatch<SetStateAction<string[]>>
}

const FormSlicer = ({
  success,
  slicerOwners,
  setSlicerOwners,
  currencies,
  setCurrencies
}: Props) => {
  const { account } = useAppContext()

  const totalShares = slicerOwners.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.shares),
    0
  )

  const resetInputs = () => {
    setSlicerOwners([])
  }

  const handleAddOwner = () => {
    saEvent("add_owner")
    if (slicerOwners.length == 0) {
      setSlicerOwners([{ account, shares: 1000 }])
    } else {
      setSlicerOwners([...slicerOwners, { account: "", shares: 0 }])
    }
  }

  useEffect(() => {
    if (success) {
      resetInputs()
    }
  }, [success])

  return (
    <div className="space-y-10">
      <div className="pt-6 text-left">
        <div className="pb-6 text-sm text-gray-500">
          <p>
            The Slicer will split any payment received to the project&apos;s
            contributors, so earnings related to the project should be directed
            to its address. Learn more on{" "}
            <a
              className="text-gray-500 highlight"
              href="https://slice.so"
              target="_blank"
              rel="noreferrer"
              onClick={() => saEvent("slice_link_settings")}
            >
              slice.so
            </a>
            .
          </p>
        </div>
        <div className="pb-3">
          <p className="pb-1 font-semibold">Initial Slicer owners</p>
          <p className="text-sm text-gray-500">
            Pick the initial owners of the Slicer.
          </p>
        </div>
        <div className="grid items-center grid-cols-8 text-left xs:grid-cols-10 md:grid-cols-12 gap-x-4 gap-y-3 xs:gap-y-4">
          {slicerOwners.length != 0 && (
            <>
              <p className="mb-[-16px] text-sm text-gray-600 font-semibold hidden xs:block xs:col-span-5 xs:col-start-2 md:col-span-7 md:col-start-2">
                Address
              </p>
              <div className="mb-[-16px] text-gray-600 relative items-center hidden xs:flex">
                <p className="pr-1 text-sm font-semibold">Slices</p>
                <Question
                  text={
                    <>
                      <p>
                        Slices 🍰 represent ownership over a Slicer and its
                        earnings.
                      </p>
                      <p>
                        The total number of slices defines the{" "}
                        <b>minimum divisible unit of ownership</b>.{" "}
                        {totalShares ? (
                          <>
                            With the current setup,{" "}
                            <b>
                              1 slice ={" "}
                              {Math.floor((1 / totalShares) * 1000000000) /
                                10000000}
                              %
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
            </>
          )}
          {[...Array(slicerOwners.length)].map((el, i) => {
            return (
              <FormSlicerInput
                key={i}
                index={i}
                totalShares={totalShares}
                slicerOwners={slicerOwners}
                setSlicerOwners={setSlicerOwners}
              />
            )
          })}
        </div>
        <div className="mt-4 xs:mt-6 inline-flex ml-[9px] text-green-500 group">
          <Add
            onClick={() => handleAddOwner()}
            className="mr-3 cursor-pointer opacity-80 group-hover:opacity-100"
          />
          <p
            className="font-medium cursor-pointer opacity-80 group-hover:opacity-100"
            onClick={() => handleAddOwner()}
          >
            Add owner
          </p>
        </div>
        {totalShares > 1000000 && (
          <p className="pt-6 text-sm font-medium text-yellow-600">
            Slicers have a limit of 4B total slices. To keep enough as future
            rewards for contributors, consider not exceeding 1M of total slices
            at this stage.
          </p>
        )}
      </div>
      <FormSlicerCurrencies
        currencies={currencies}
        setCurrencies={setCurrencies}
      />
    </div>
  )
}

export default FormSlicer
