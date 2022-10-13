import { Button, ConnectBlock, AddDelegate } from "@components/ui"

type Props = {}

const Main = ({}: Props) => {
  return (
    <ConnectBlock>
      <main className="w-full max-w-screen-sm mx-auto">
        <AddDelegate />
      </main>
    </ConnectBlock>
  )
}

export default Main
