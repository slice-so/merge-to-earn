import { NewTransaction } from "@rainbow-me/rainbowkit/dist/transactions/transactionStore"
import { Dispatch, SetStateAction } from "react"
import { waitForTransaction, WriteContractResult } from "@wagmi/core"

export type TxData = {
  transactionHash?: string
}

const executeTransaction = async (
  promise: () => Promise<WriteContractResult>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  txDescription?: string,
  addRecentTransaction?: (transaction: NewTransaction) => void,
  settlementLogic?: any
) => {
  setLoading(true)

  try {
    try {
      const tx = await promise()

      if (addRecentTransaction) {
        addRecentTransaction({
          hash: tx.hash,
          description: txDescription || "Transaction executed"
        })
      }

      const { data: waitData } = await waitForTransaction({ hash: tx.hash })

      if (settlementLogic) {
        settlementLogic()
      }

      setLoading(false)
      return waitData
    } catch (err) {
      console.log(err)
    }
  } catch (err) {
    console.log(err)
  }
  setLoading(false)
}

export default executeTransaction
