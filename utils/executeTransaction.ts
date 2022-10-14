import { NewTransaction } from "@rainbow-me/rainbowkit/dist/transactions/transactionStore"
import { Dispatch, SetStateAction } from "react"

export type TxData = {
  transactionHash?: string
}

const executeTransaction = async (
  promise: () => Promise<any>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  txDescription?: string,
  addRecentTransaction?: (transaction: NewTransaction) => void,
  settlementLogic?: any,
  setData?: Dispatch<SetStateAction<any>>
) => {
  setLoading(true)

  if (setData) {
    setData(null)
  }

  try {
    const tx = await promise()

    if (addRecentTransaction) {
      addRecentTransaction({
        hash: tx.hash,
        description: txDescription || "Transaction executed"
      })
    }

    const waitData = await tx.wait()

    if (settlementLogic) {
      settlementLogic()
    }

    if (setData) {
      setData(waitData)
    }
  } catch (err) {}
  setLoading(false)
}

export default executeTransaction
