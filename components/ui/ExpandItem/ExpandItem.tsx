import Chevron from "@components/icons/Chevron"
import saEvent from "@utils/saEvent"
import { useState } from "react"

type Props = {
  label: string
  content: string | JSX.Element
  id?: string
  anchor?: string
  wrapperClassName?: string
  saEventText?: string
}

const ExpandItem = ({
  label,
  content,
  id = label,
  anchor,
  wrapperClassName,
  saEventText
}: Props) => {
  const [showAnswer, setShowAnswer] = useState(anchor == id)
  return (
    <>
      <div
        className={`flex items-center pt-5 border-b-2 nightwind-prevent border-blue-600 cursor-pointer group ${wrapperClassName}`}
        onClick={() => {
          saEventText ? saEvent(saEventText) : null
          setShowAnswer((showAnswer) => !showAnswer)
        }}
        id={id}
      >
        <div className="flex-shrink-0 w-6 h-6 mb-2 mr-2">
          <Chevron
            className={`transition-transform duration-200 ease-out ${
              showAnswer
                ? "-rotate-90"
                : "group-hover:translate-x-[6px] -rotate-180"
            } `}
          />
        </div>
        <span className="mt-0 mb-2 font-semibold leading-relaxed text-black">
          {label}
        </span>
      </div>
      {showAnswer && (
        <div className="py-2">
          {typeof content == "string" ? <p className="">{content}</p> : content}
        </div>
      )}
    </>
  )
}

export default ExpandItem

// TODO: Fix react state update - useEffect should be used to handle init state of showAnswer, but at the FAQs component. Preferable to not use at all.
