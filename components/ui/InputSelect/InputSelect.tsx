import React, { Dispatch, SetStateAction } from "react"
import Question from "../Question"

export type SelectValue = {
  value: string
  name?: string
}

type Props = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  options?: SelectValue[]
  label?: string
  question?: JSX.Element | string
  questionPosition?: string
  helpText?: JSX.Element | string
  subText?: string | JSX.Element
  required?: boolean
  genericValue?: boolean
  genericText?: string
}

const InputSelect = ({
  value,
  setValue,
  options,
  label,
  question,
  questionPosition,
  helpText,
  subText,
  required,
  genericValue = true,
  genericText = ""
}: Props) => {
  return (
    <label className="pb-4 text-left">
      <div className="pb-2">
        <div className="relative flex items-center">
          <p className="pr-1 text-sm font-semibold text-gray-700">{label}</p>
          {question && <Question position={questionPosition} text={question} />}
        </div>
        {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
      </div>
      <select
        className="w-full py-2 pl-5 pr-4 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-sm appearance-none focus:border-blue-600 disabled:text-gray-500 disabled:bg-gray-50 focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!options}
        required={required}
      >
        {genericValue && (
          <option value="">{genericText || "Pick an option..."}</option>
        )}
        {options?.map((el, key) => (
          <option key={key} value={el.value}>
            {el.name || el.value}
          </option>
        ))}
      </select>
      {subText && (
        <p className="w-full mt-2 -mb-2 text-xs font-black text-left text-blue-600 dark:text-sky-300 opacity-80">
          {subText}
        </p>
      )}
    </label>
  )
}

export default InputSelect
