import { createContext, useContext, useEffect, useState } from "react"
import { View } from "@lib/content/modals"
import { useAccount, useProvider } from "wagmi"

const AppContext = createContext<any>({
  connector: null,
  provider: null,
  account: "",
  isConnected: false,
  modalView: { name: "" },
  setModalView: () => null
})

export function AppWrapper({ children }) {
  const [isConnected, setIsConnected] = useState(false)
  const [modalView, setModalView] = useState<View>({ name: "" })
  const provider = useProvider()

  const { address: account, connector } = useAccount()

  useEffect(() => {
    setIsConnected(account && true)
  }, [account])

  return (
    <AppContext.Provider
      value={{
        connector,
        provider,
        account,
        isConnected,
        modalView,
        setModalView
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
