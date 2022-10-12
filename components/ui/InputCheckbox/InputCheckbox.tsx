import React, { InputHTMLAttributes } from "react"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onChange: (...args: any[]) => any
  label?: string
  className?: string
  labelClassName?: string
  id?: string
}

const InputCheckbox: React.FC<Props> = (props) => {
  const { checked, onChange, className, label, labelClassName, id, ...rest } =
    props

  const rootClassName = `w-4 h-4 rounded bg-white text-blue-600 dark:text-blue-600 shadow-sm focus:ring focus:ring-offset-0 focus:ring-blue-200 dark:focus:ring-blue-700 focus:!ring-opacity-50 ${
    checked ? "bg-blue-600 dark:bg-blue-600" : "border-gray-300"
  }`

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className={className || rootClassName}
        checked={checked}
        onChange={onChange}
        id={id}
      />
      {label && <p className={labelClassName || "pl-3"}>{label}</p>}
    </label>
  )
}

export default InputCheckbox
