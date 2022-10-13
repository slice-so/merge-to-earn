import {
  Button,
  ConnectBlock,
  ExpandItem,
  FormSafes,
  FormSlicer
} from "@components/ui"
import handleMessage, { Message } from "@utils/handleMessage"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useSignMessage } from "wagmi"
import { useAppContext } from "../context"
import { SlicerOwner } from "../FormSlicer/FormSlicer"

const Main = () => {
  const { account } = useAppContext()
  const baseUrl = `https://safe-transaction.${process.env.NEXT_PUBLIC_ENV}.gnosis.io`
  const delegateAddress = process.env.NEXT_PUBLIC_DELEGATE

  const [delegateSuccess, setDelegateSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState<Message>()

  const [safeAddress, setSafeAddress] = useState("")
  const [slicerOwners, setSlicerOwners] = useState<SlicerOwner[]>([])
  const [currencies, setCurrencies] = useState<string[]>([])

  const { data, isLoading, isSuccess, signMessage } = useSignMessage({
    message: ethers.utils.arrayify(
      ethers.utils.keccak256(
        Buffer.from(
          delegateAddress +
            String(Math.floor(Math.floor(Date.now() / 1000) / 3600))
        )
      )
    )
  })

  const addDelegate = async (signature: string) => {
    setLoading(true)
    try {
      const body = {
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          safe: safeAddress,
          delegate: delegateAddress,
          delegator: account,
          signature,
          label: "Merge to earn"
        }),
        method: "POST"
      }

      const res = await fetch(`${baseUrl}/api/v1/delegates/`, body)

      if (res.status == 201) {
        setDelegateSuccess(true)
      } else {
        const errorMessage = Object.values(await res.json())[0][0]

        handleMessage(
          { message: errorMessage, messageStatus: "error" },
          setMessage
        )
      }
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (isSuccess && data) {
      addDelegate(data.replace(/1b$/, "1f").replace(/1c$/, "20"))
    }
  }, [data])

  const submit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    setMessage(null)
    signMessage()
  }

  return (
    <ConnectBlock>
      <form
        className="w-full mx-auto space-y-8 max-w-screen-xs"
        onSubmit={(e) => submit(e)}
      >
        <FormSafes
          baseUrl={baseUrl}
          safeAddress={safeAddress}
          setSafeAddress={setSafeAddress}
          message={message}
        />

        <div>
          <ExpandItem
            label="Slicer settings"
            content={
              <FormSlicer
                success={success}
                slicerOwners={slicerOwners}
                setSlicerOwners={setSlicerOwners}
                currencies={currencies}
                setCurrencies={setCurrencies}
              />
            }
          />
        </div>

        <div className="pt-6">
          <p className="pb-6 text-sm text-gray-500">
            Proceed to create a slicer controlled by the chosen Gnosis safe, and
            delegate the safe to &quot;Merge to earn&quot; so that it can create
            proposals when pull requests are merged.
          </p>
          <Button
            type="submit"
            label="Set up slicer and safe"
            loading={isLoading || loading}
          />
        </div>
      </form>
    </ConnectBlock>
  )
}

export default Main
