import Arrow from "@components/icons/Arrow"
import Spinner from "@components/icons/Spinner"
import React, { InputHTMLAttributes } from "react"
import Question from "../Question"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  helpText?: string
  prefix?: string
  after?: string
  error?: boolean
  loading?: boolean
  question?: JSX.Element
  questionPosition?: string
  onClickLabel?: string
  prefixAction?: (...args: any[]) => any
  onClick?: (...args: any[]) => any
  onChange?: (...args: any[]) => any
}

const Input: React.FC<Props> = (props) => {
  const {
    className,
    label,
    helpText,
    prefix = "",
    after,
    children,
    error,
    loading,
    disabled,
    question,
    questionPosition = "bottom-[20px] left-[-40px] xs:left-0",
    prefixAction,
    onClick,
    onClickLabel,
    onChange,
    ...rest
  } = props

  const rootClassName = `bg-white rounded-sm py-2 px-6 w-full appearance-none pr-4 border focus:outline-none ${className} ${
    error
      ? "text-red-500 border-red-400 focus:border-red-400 shadow-error"
      : "text-black border-gray-200 focus:border-blue-600 placeholder-gray-400 disabled:text-gray-500 disabled:border-blue-100 disabled:bg-gray-50"
  }`

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label className="text-left">
      {label && (
        <>
          <div className="pb-2">
            <div className="relative flex items-center">
              <p className="pr-1 text-sm font-semibold text-gray-700">
                {label}
              </p>
              {question && (
                <Question position={questionPosition} text={question} />
              )}
            </div>
            {helpText && (
              <p className="pb-2 text-sm text-gray-600">{helpText}</p>
            )}
          </div>
        </>
      )}
      <div className="flex flex-row-reverse mb-3">
        {onClick && (
          <div
            className={`relative text-sm font-medium group flex items-center justify-center px-5 text-white nightwind-prevent ${
              error
                ? "cursor-pointer bg-red-500"
                : `bg-blue-600 ${
                    !disabled && !loading
                      ? "cursor-pointer hover:bg-blue-700"
                      : ""
                  }`
            }`}
            onClick={!disabled && !loading ? onClick : null}
          >
            {onClickLabel && (
              <span className={`mr-1 ${loading ? "-z-10" : ""}`}>
                {onClickLabel}
              </span>
            )}
            <div
              className={`w-[1.2rem] h-[1.2rem] text-white nightwind-prevent transition-transform duration-150 group-hover:translate-x-1 ${
                loading ? "-z-10" : ""
              }`}
            >
              <Arrow />
            </div>
            {loading && (
              <div className="absolute flex items-center justify-center w-full h-full">
                <Spinner color="text-white nightwind-prevent" />
              </div>
            )}
          </div>
        )}

        <input
          className={rootClassName}
          onChange={handleOnChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          disabled={disabled || loading}
          onWheel={(e) => e.currentTarget.blur()}
          {...rest}
        />

        {prefix && (
          <div
            className={`flex items-center text-sm justify-center px-4 min-w-[50px] text-gray-700 ${
              error
                ? "bg-red-500"
                : !disabled && !loading
                ? "bg-blue-300 text-black peer-focus:bg-sky-600 dark:peer-focus:bg-sky-300"
                : ""
            } ${
              prefixAction && !disabled && !loading
                ? "cursor-pointer hover:bg-gray-100 hover:text-blue-600"
                : ""
            } ${disabled || loading ? "text-gray-400 bg-gray-100" : ""}`}
            onClick={
              prefixAction && !disabled && !loading
                ? () => prefixAction()
                : null
            }
          >
            {prefix}
          </div>
        )}
      </div>
    </label>
  )
}

export default Input
