import { Button, Input } from "@components/ui"
import handleMessage, { Message } from "@utils/handleMessage"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useSignMessage } from "wagmi"
import { useAppContext } from "../context"

type Props = {}

const SignButton = ({}: Props) => {
  const { account } = useAppContext()
  const [safeAddress, setSafeAddress] = useState(
    "0xA8a3763a206D99d3b8bEc94d336F43FdEC3fC6F8"
  )
  const [loading, setLoading] = useState(false)
  const [delegateSuccess, setDelegateSuccess] = useState(false)
  const [message, setMessage] = useState<Message>()

  const baseUrl = "https://safe-transaction.goerli.gnosis.io"
  const delegateAddress = "0x9e44554C0832151B08a37B484d7DfEada7d34Eb7"

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

  return (
    <div className="space-y-6">
      <p>Allow Merge to earn to create proposals on your Gnosis safe</p>
      <div>
        <Input
          label="Gnosis safe address"
          value={safeAddress}
          onChange={setSafeAddress}
        />
      </div>
      <Button
        label="Delegate Gnosis safe"
        loading={isLoading || loading}
        onClick={() => {
          setMessage(null)
          signMessage()
        }}
      />
      {message && <p className="text-sm text-red-500">{message.message}</p>}
    </div>
  )
}

export default SignButton
