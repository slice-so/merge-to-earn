import { Dispatch, SetStateAction } from "react"

export type Message = { message: string; messageStatus: "success" | "error" }

const handleMessage = (
  message: Message,
  setMessage: Dispatch<SetStateAction<Message>>
) => {
  setMessage(message)
  setTimeout(() => {
    setMessage({ message: "", messageStatus: "success" })
  }, 5000)
}

export default handleMessage
