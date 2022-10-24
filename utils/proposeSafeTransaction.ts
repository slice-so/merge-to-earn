import fetcher from "@utils/fetcher"
import { ethers } from "ethers"
import { mteWallet, safe, sliceCoreAddress } from "utils/initContracts"

export type Mint = {
  account: string
  shares: number
}

const env = process.env.NEXT_PUBLIC_ENV // "mainnet" || "goerli"

const baseUrl =
  env == "mainnet"
    ? `https://safe-transaction.${env}.gnosis.io/`
    : `https://safe-transaction-${env}.safe.global/`

export const proposeTransaction = async (
  mints: Mint[],
  safeAddress: string,
  slicerId: number | string
) => {
  let res: Response
  try {
    const { nonce } = await fetcher(baseUrl + `api/v1/safes/${safeAddress}`)

    const { accounts, tokenDiffs } = await updateAccountsToMint(
      nonce,
      mints,
      safeAddress,
      slicerId
    )
    const resliceData = formatResliceData(accounts, tokenDiffs, slicerId)

    const { safeTxGas } = await getEstimate(resliceData, safeAddress)

    const transactionHash = await getTransactionHash(
      nonce,
      safeTxGas,
      resliceData,
      safeAddress
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

    res = await fetch(baseUrl + endpoint, body)

    if (res.status != 201) {
      throw Error("Proposal unsuccessful")
    }
  } catch (err) {
    console.log(err)
  }
  return res.status
}

const getEstimate = async (data: string, safeAddress: string) => {
  const endpoint = `api/v1/safes/${safeAddress}/multisig-transactions/estimations/`

  const body = {
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      to: sliceCoreAddress,
      value: 0,
      data,
      operation: 0 // 0 CALL, 1 DELEGATE_CALL
    }),
    method: "POST"
  }

  return fetcher(baseUrl + endpoint, body)
}

const updateAccountsToMint = async (
  nonce: number,
  mints: Mint[],
  safeAddress: string,
  slicerId: string | number
) => {
  const endpoint = `api/v1/safes/${safeAddress}/multisig-transactions?nonce=${nonce}`
  const decoder = ethers.utils.defaultAbiCoder

  const res = await fetcher(baseUrl + endpoint)
  const lastReslice = res?.results.filter((tx) => {
    const decodedSlicerId = Number(
      decoder.decode(["uint256"], "0x" + tx.data.slice(10, 74))
    )

    return tx.to == sliceCoreAddress && decodedSlicerId == Number(slicerId)
  })[0]

  const [, accounts, tokenDiffs] = lastReslice
    ? decoder.decode(
        ["uint256", "address[]", "int32[]"],
        "0x" + lastReslice.data.slice(10)
      )
    : ([0, [], []] as [number, string[], number[]])

  const updatedAccounts = [...accounts]
  const updatedTokenDiffs = [...tokenDiffs]

  mints.forEach((el) => {
    const i = updatedAccounts.findIndex((account) => account == el.account)
    if (i == -1) {
      updatedAccounts.push(el.account)
      updatedTokenDiffs.push(el.shares)
    } else {
      updatedTokenDiffs[i] += el.shares
    }
  })

  return { accounts: updatedAccounts, tokenDiffs: updatedTokenDiffs }
}

const getTransactionHash = async (
  nonce: number,
  safeTxGas: string,
  data: string,
  safeAddress: string
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

const formatResliceData = (
  accounts: string[],
  tokenDiffs: number[],
  slicerId: string | number
) =>
  ethers.utils
    .keccak256(ethers.utils.toUtf8Bytes("reslice(uint256,address[],int32[])"))
    .slice(0, 10) +
  ethers.utils.defaultAbiCoder
    .encode(
      ["uint256", "address[]", "int32[]"],
      [slicerId, accounts, tokenDiffs]
    )
    .slice(2)
