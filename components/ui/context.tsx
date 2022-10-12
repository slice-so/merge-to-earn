import { createContext, useContext, useState } from "react"
import { View } from "@lib/content/modals"

const AppContext = createContext<any>({
  modalView: { name: "" },
  setModalView: () => null
})

export function AppWrapper({ children }) {
  const [modalView, setModalView] = useState<View>({ name: "" })

  return (
    <AppContext.Provider
      value={{
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
