import {
  Button,
  ConnectBlock,
  ExpandItem,
  FormGithub,
  FormSafes,
  FormSlicer
} from "@components/ui"
import handleMessage, { Message } from "@utils/handleMessage"
import { ContractReceipt, ethers } from "ethers"
import { useEffect, useState } from "react"
import { useContractWrite, usePrepareContractWrite } from "wagmi"
import { useAppContext } from "../context"
import { SlicerOwner } from "../FormSlicer/FormSlicer"
import sliceCore from "abi/SliceCore.json"
import launchConfetti from "@utils/launchConfetti"
import executeTransaction from "@utils/executeTransaction"
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit"
import { LogDescription } from "ethers/lib/utils"
import { GithubCircle } from "@components/icons/Social"
import { signIn, useSession } from "next-auth/react"
import fetcher from "@utils/fetcher"
import useSWR from "swr"
import { Repo, RepoResponse } from "../FormGithub/FormGithub"
import saEvent from "@utils/saEvent"
import { useEthersSigner } from "@utils/ethers"

const Main = () => {
  const addRecentTransaction = useAddRecentTransaction()
  const { data: session } = useSession()
  const { account, setModalView } = useAppContext()

  const env = process.env.NEXT_PUBLIC_ENV
  const baseUrl = `https://safe-transaction-${env}.safe.global/`
  const delegateAddress = process.env.NEXT_PUBLIC_DELEGATE

  const [loading, setLoading] = useState(false)
  const [signature, setSignature] = useState("")
  const [uploadStep, setUploadStep] = useState(0)
  const [message, setMessage] = useState<Message>()

  const [repo, setRepo] = useState<Repo>()
  const [safeAddress, setSafeAddress] = useState("")
  const [slicerOwners, setSlicerOwners] = useState<SlicerOwner[]>([])
  const [currencies, setCurrencies] = useState<`0x${string}`[]>([])
  const [slicerId, setSlicerId] = useState(0)

  const { data: isUnsetRepo } = useSWR(
    repo ? `/api/connection/get?repoId=${repo.repoId}` : null,
    fetcher
  )
  const {
    data: repoList
  }: {
    data?: RepoResponse[]
  } = useSWR(
    session?.accessToken ? `/api/getRepo?token=${session.accessToken}` : null,
    fetcher
  )

  const signer = useEthersSigner()

  const payees = slicerOwners
    .filter((el) => el.account && el.shares > 0)
    .map((el) => {
      el["transfersAllowedWhileLocked"] = false
      return el
    })

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_SLICECORE,
    abi: sliceCore.abi,
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

      const res = await fetch(`${baseUrl}api/v1/delegates/`, body)

      if (res.status != 201) {
        const errorMessage = Object.values(await res.json())[0][0]

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
    setSignature("")
    setLoading(true)
    setUploadStep(1)
    setSlicerId(0)
    saEvent("setup_init")

    try {
      // const res = await signMessageAsync()
      const res = await signer.signMessage(
        ethers.utils.arrayify(
          ethers.utils.keccak256(
            Buffer.from(
              delegateAddress +
                String(Math.floor(Math.floor(Date.now() / 1000) / 3600))
            )
          )
        )
      )
      if (!res) {
        saEvent("setup_fail_signature")
        setUploadStep(4) // fail
      } else {
        setSignature(res)
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

          setUploadStep(3)

          const body = {
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              token: session.accessToken,
              installationId: repo.installationId,
              repoId: repo.repoId,
              slicerId: Number(tokenId),
              safeAddress
            }),
            method: "POST"
          }
          const res = await fetch("/api/connection/create", body)
          console.log(await res.json())

          if (res.status == 200) {
            saEvent("setup_success")
            setUploadStep(5)
          } else {
            saEvent("setup_fail_connection_create")
            setUploadStep(4) // fail
          }
        } else {
          saEvent("setup_fail_tx")
          setUploadStep(4) // fail
        }
      }
    } catch (err) {
      console.log(err)

      saEvent(`setup_fail_${err}`)
      setUploadStep(4)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (signature) {
      addDelegate(signature.replace(/1b$/, "1f").replace(/1c$/, "20"))
    }
  }, [signature])

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

  return session ? (
    <div className="w-full mx-auto space-y-8 max-w-screen-xs">
      <FormGithub repo={repo} setRepo={setRepo} repoList={repoList} />
      {isUnsetRepo && (
        <p className="font-medium text-yellow-600">
          This repo has already been set up
        </p>
      )}
      <form className="space-y-8" onSubmit={submit}>
        {repo && !isUnsetRepo && (
          <ConnectBlock>
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
                saEventText="slicer_settings"
              />
            </div>

            <div className="pt-6">
              <p className="pb-6 text-sm text-gray-500">
                Proceed to create a Slicer controlled by the Gnosis Safe, and
                delegate MTE to propose transactions on the Safe when pull
                requests are merged.
              </p>
              <Button
                type="submit"
                label="Set up Slicer and Safe"
                loading={loading}
              />
            </div>
          </ConnectBlock>
        )}
      </form>
    </div>
  ) : (
    <Button
      label={
        <span className="flex items-center gap-3">
          <span className="h-5 text-white">
            <GithubCircle />
          </span>
          <span>Sign in with Github</span>
        </span>
      }
      onClick={() => {
        saEvent("signin_github_attempt")
        signIn("github")
      }}
      color="text-white bg-black hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-150"
    />
  )
}

export default Main

// TODO: Fix sign process
