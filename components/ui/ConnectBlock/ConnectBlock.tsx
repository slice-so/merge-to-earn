import { useAppContext } from "@components/ui/context"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import saEvent from "@utils/saEvent"

const ConnectBlock = ({ children }) => {
  const { isConnected } = useAppContext()
  return isConnected ? (
    children
  ) : (
    <>
      <div className="flex flex-col items-center pb-6 mx-auto max-w-screen-xs">
        <div onClick={() => saEvent("connect_wallet_attempt")}>
          <ConnectButton />
        </div>
      </div>
    </>
  )
}

export default ConnectBlock
