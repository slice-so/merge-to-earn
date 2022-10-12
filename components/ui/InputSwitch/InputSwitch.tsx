import { Dispatch, SetStateAction } from "react"
import Question from "../Question"
import MySwitch from "../MySwitch"

type Props = {
  label: string
  questionText?: string | JSX.Element
  position?: string
  enabled: boolean
  setEnabled: Dispatch<SetStateAction<boolean>>
}

export default function InputSwitch({
  label,
  questionText,
  position,
  enabled,
  setEnabled
}: Props) {
  return (
    <div className="relative flex items-center justify-end py-2 ">
      <div className="flex items-center mr-3">
        <p className="pr-1">{label}</p>
        {questionText && <Question text={questionText} position={position} />}
      </div>
      <MySwitch enabled={enabled} setEnabled={setEnabled} />
    </div>
  )
}
