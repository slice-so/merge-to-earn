import Chevron from "@components/icons/Chevron"
import saEvent from "@utils/saEvent"
import { useState } from "react"

type Props = {
  question: string
  answer: string | JSX.Element
  id: string
  anchor?: string
  wrapperClassName?: string
}

const FAQsItem = ({
  question,
  answer,
  id,
  anchor,
  wrapperClassName
}: Props) => {
  const [showAnswer, setShowAnswer] = useState(anchor == id)
  return (
    <li>
      <div
        className={`flex items-center pt-5 border-b-2 border-blue-600 cursor-pointer group ${wrapperClassName}`}
        onClick={() => {
          saEvent(`faq_${id}`)
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
          {question}
        </span>
      </div>
      {showAnswer && (
        <div className="px-3 py-2 border-b border-l border-r border-blue-600 rounded-b-sm xs:pl-8 xs:pr-4">
          {typeof answer == "string" ? <p className="">{answer}</p> : answer}
        </div>
      )}
    </li>
  )
}

export default FAQsItem

// TODO: Fix react state update - useEffect should be used to handle init state of showAnswer, but at the FAQs component. Preferable to not use at all.
