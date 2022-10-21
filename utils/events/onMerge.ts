import { PullRequestEvent } from "@octokit/webhooks-types"
import { Connection } from "@prisma/client"
import getConnection from "@utils/getConnection"
import { safe, sliceCoreAddress } from "@utils/initContracts"
import { ethers } from "ethers"

type Mint = {
  account: string
  shares: number
}

const env = "mainnet"

// const baseUrl = `https://safe-transaction.${env}.gnosis.io`
const baseUrl = `https://safe-transaction-${env}.safe.global/` // temp endpoint?

export default async function onMerge(payload: PullRequestEvent) {
  const connection: Connection = await getConnection(payload.repository.id)
  const { slicerId, safeAddress } = connection

  const proposeTransaction = async (mints: Mint[]) => {
    try {
      const resliceData = formatResliceData(mints)
      const [nonce, safeTxGas] = await getEstimate(resliceData)
      const transactionHash = await getTransactionHash(
        nonce,
        safeTxGas,
        resliceData
      )
      const hashToSign = transactionHash
      const signature = (
        await mteWallet.signMessage(ethers.utils.arrayify(hashToSign))
      )
        .replace(/1b$/, "1f")
        .replace(/1c$/, "20")
      const endpoint = `api/v1/safes/${safeAddress}/multisig-transactions/`
      const body = {
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          to: sliceCoreAddress,
          value: 0,
          data: resliceData,
          operation: 0,
          safeTxGas,
          baseGas: 0,
          gasPrice: 0,
          gasToken: null,
          refundReceiver: null,
          nonce,
          contractTransactionHash: transactionHash,
          sender: mteWallet.address,
          signature,
          origin: "Merge to earn"
        }),
        method: "POST"
      }
      const res: any = await fetch(baseUrl + endpoint, body)
      console.log({ res }) // TODO: Check res
      if (res.status != 201) {
        throw Error("Proposal unsuccessful")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getEstimate = async (data: string) => {
    const relayUrl = `https://safe-relay.gnosis.io/` // only mainnet
    const endpoint = `api/v1/safes/${safeAddress}/transactions/estimate/`

    const body = {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        to: sliceCoreAddress,
        value: 0,
        data,
        operation: 0, // 0 CALL, 1 DELEGATE_CALL
        gasToken: null
      }),
      method: "POST"
    }

    const estimate: any = await fetch(relayUrl + endpoint, body) // TODO: Check this works
    console.log({ estimate })
    return [estimate.lastUsedNonce + 1, estimate.safeTxGas]
  }

  const getTransactionHash = async (
    nonce: number,
    safeTxGas: number,
    data: string
  ) =>
    await safe(safeAddress).getTransactionHash(
      sliceCoreAddress,
      0,
      data,
      0, // 0 CALL
      safeTxGas,
      0,
      0,
      ethers.constants.AddressZero,
      ethers.constants.AddressZero,
      nonce
    )

  const formatResliceData = (mints: Mint[]) => {
    let accounts: string[] = []
    let tokenDiffs: number[] = []
    mints.forEach((el) => {
      accounts.push(el.account)
      tokenDiffs.push(el.shares)
    })
    return (
      ethers.utils
        .keccak256(
          ethers.utils.toUtf8Bytes("reslice(uint256,address[],int32[])")
        )
        .slice(0, 10) +
      ethers.utils.defaultAbiCoder
        .encode(
          ["uint256", "address[]", "int32[]"],
          [slicerId, accounts, tokenDiffs]
        )
        .slice(2)
    )
  }
}
