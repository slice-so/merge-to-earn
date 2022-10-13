import resolveEns from "utils/resolveEns"
import React, {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect
} from "react"
import { useAppContext } from "../context"
import Input from "../Input/Input"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  address: string
  resolvedAddress: string
  setResolvedAddress: Dispatch<SetStateAction<string>>
  label?: string
  onChange?: (...args: any[]) => any
  placeholder?: string
  resolve?: boolean
}

const InputAddress: React.FC<Props> = (props) => {
  const { provider } = useAppContext()
  const {
    address,
    required,
    label,
    placeholder = "0x… / slice-so.eth",
    onChange,
    resolvedAddress,
    setResolvedAddress,
    ...rest
  } = props

  const addressReduced = resolvedAddress
    ? resolvedAddress.substring(resolvedAddress.length - 4) !== ".eth" &&
      resolvedAddress !== "Invalid ENS name"
      ? resolvedAddress.replace(
          resolvedAddress.substring(5, resolvedAddress.length - 3),
          `___`
        )
      : resolvedAddress
    : null

  useEffect(() => {
    if (provider && address) {
      const timeout = setTimeout(
        () => resolveEns(provider, address, setResolvedAddress),
        200
      )
      return () => {
        clearTimeout(timeout)
        setResolvedAddress("")
      }
    }
  }, [provider, address])

  return (
    <div className="relative mb-2">
      <Input
        type="string"
        value={address}
        placeholder={placeholder}
        label={label}
        required={required}
        error={resolvedAddress === "Invalid ENS name"}
        onChange={onChange}
      />
      {resolvedAddress && (
        <p
          className={`${
            resolvedAddress === "Invalid ENS name"
              ? "text-red-500"
              : "text-blue-600 dark:text-sky-300"
          } absolute text-xs opacity-80 font-black left-0 bottom-[-20px]
          }`}
        >
          {addressReduced}
        </p>
      )}
    </div>
  )
}

export default InputAddress
