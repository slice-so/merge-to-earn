import {
  Button,
  ConnectBlock,
  ExpandItem,
  FormSafes,
  FormSlicer
} from "@components/ui"
import handleMessage, { Message } from "@utils/handleMessage"
import { ContractReceipt, ethers } from "ethers"
import { useEffect, useState } from "react"
import {
  useContractWrite,
  usePrepareContractWrite,
  useSignMessage
} from "wagmi"
import { useAppContext } from "../context"
import { SlicerOwner } from "../FormSlicer/FormSlicer"
import sliceCore from "abi/SliceCore.json"
import launchConfetti from "@utils/launchConfetti"
import executeTransaction from "@utils/executeTransaction"
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit"
import { LogDescription } from "ethers/lib/utils"

const Main = () => {
  const { account, setModalView } = useAppContext()
  const addRecentTransaction = useAddRecentTransaction()
  // const baseUrl = `https://safe-transaction.${process.env.NEXT_PUBLIC_ENV}.gnosis.io`
  const baseUrl = `https://safe-transaction-${process.env.NEXT_PUBLIC_ENV}.safe.global` // temp endpoint?
  const delegateAddress = process.env.NEXT_PUBLIC_DELEGATE

  const [loading, setLoading] = useState(false)
  const [uploadStep, setUploadStep] = useState(0)
  const [message, setMessage] = useState<Message>()

  const [safeAddress, setSafeAddress] = useState("")
  const [slicerOwners, setSlicerOwners] = useState<SlicerOwner[]>([])
  const [currencies, setCurrencies] = useState<string[]>([])
  const [slicerId, setSlicerId] = useState(0)

  const { data, isLoading, isSuccess, signMessageAsync } = useSignMessage({
    message: ethers.utils.arrayify(
      ethers.utils.keccak256(
        Buffer.from(
          delegateAddress +
            String(Math.floor(Math.floor(Date.now() / 1000) / 3600))
        )
      )
    )
  })

  const payees = slicerOwners
    .filter((el) => el.account && el.shares > 0)
    .map((el) => {
      el["transfersAllowedWhileLocked"] = false
      return el
    })

  // TODO: Fix errors when missing params
  const { config } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_SLICECORE,
    contractInterface: sliceCore.abi,
    functionName: "slice",
    chainId: process.env.NEXT_PUBLIC_ENV == "goerli" ? 5 : 1,
    args: [
      {
        payees,
        minimumShares: 1,
        currencies: currencies.filter((el) => el),
        releaseTimelock: 0,
        transferTimelock: 0,
        controller: safeAddress || account, // use account to prevent triggering console errors before safe is set
        slicerFlags: 6,
        sliceCoreFlags: 4
      }
    ]
  })
  const { writeAsync: sliceWriteAsync } = useContractWrite(config)

  const addDelegate = async (signature: string) => {
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

      if (res.status != 201) {
        const errorMessage = Object.values(await res.json())[0][0]
        console.log(await res.json())

        handleMessage(
          { message: errorMessage, messageStatus: "error" },
          setMessage
        )
      }
    } catch (error) {}
  }

  const submit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    setUploadStep(1)
    setSlicerId(0)

    try {
      const res = await signMessageAsync()
      if (!res) {
        setUploadStep(3) // fail
      } else {
        setUploadStep(2)

        const contract = new ethers.Contract(
          process.env.NEXT_PUBLIC_SLICECORE,
          sliceCore.abi
        )

        // Create slicer
        const receipt: ContractReceipt = await executeTransaction(
          sliceWriteAsync,
          setLoading,
          `Create slicer`,
          addRecentTransaction
        )
        if (receipt) {
          const eventLogs: LogDescription[] = receipt?.logs.map((log) =>
            contract.interface.parseLog(log)
          )
          const tokenId = eventLogs?.find((log) => log.name === "TokenSliced")
            .args.tokenId

          setSlicerId(Number(tokenId))

          launchConfetti()

          setUploadStep(4)
        } else {
          setUploadStep(3) // fail
        }
      }
    } catch (err) {
      setUploadStep(3)
      console.log(err.message)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (isSuccess && data) {
      addDelegate(data.replace(/1b$/, "1f").replace(/1c$/, "20"))
    }
  }, [data])

  useEffect(() => {
    if (uploadStep != 0) {
      setModalView({
        name: `SETUP`,
        params: {
          uploadStep,
          setModalView,
          slicerId
        }
      })
    }
  }, [loading, uploadStep, slicerId])

  return (
    <ConnectBlock>
      <form
        className="w-full mx-auto space-y-8 max-w-screen-xs"
        onSubmit={submit}
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
                success={uploadStep == 4}
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
