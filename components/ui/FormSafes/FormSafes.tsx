import { InputSelect } from "@components/ui"
import fetcher from "@utils/fetcher"
import { Message } from "@utils/handleMessage"
import { Dispatch, SetStateAction } from "react"
import useSWR from "swr"
import { useAppContext } from "../context"

type Props = {
  baseUrl: string
  safeAddress: string
  setSafeAddress: Dispatch<SetStateAction<string>>
  message: Message
}

const FormSafes = ({
  baseUrl,
  safeAddress,
  setSafeAddress,
  message
}: Props) => {
  const { account } = useAppContext()
  const { data: ownedSafes } = useSWR(
    account ? `${baseUrl}/api/v1/owners/${account}/safes` : null,
    fetcher
  )
  const formattedOwnedSafes = ownedSafes?.safes.map((el: string) => ({
    value: el
  }))

  return (
    <div className="space-y-6">
      <div>
        <InputSelect
          label="Gnosis safe address"
          genericText="Pick one of the safes you own"
          helpText={
            <>
              If you haven&apos;t created one for your project yet, you can do
              so on the{" "}
              <a
                href="https://gnosis-safe.io/app"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 highlight"
              >
                Gnosis safe app
              </a>
            </>
          }
          question="The chosen safe will approve the slices to be minted for each PR, so in most cases should be owned by the project's maintainers."
          value={safeAddress}
          setValue={setSafeAddress}
          options={formattedOwnedSafes}
          required
        />
      </div>
      {message && <p className="text-sm text-red-500">{message.message}</p>}
    </div>
  )
}

export default FormSafes
