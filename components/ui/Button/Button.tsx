import { FC } from "react"
import Spinner from "@components/icons/Spinner"
import Link from "next/link"

interface ButtonProps {
  loading?: boolean
  className?: string
  color?: string
  type?: "button" | "submit" | "reset"
  label?: string | JSX.Element
  href?: string
  external?: boolean
  targetBlank?: boolean
  disabled?: boolean
  onClick?: any
  saEventName?: string
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className = "overflow-hidden font-bold tracking-wide rounded-sm",
    color = "text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700",
    type,
    label,
    href,
    onClick,
    loading = false,
    external = false,
    targetBlank = true,
    disabled = false,
    saEventName = "",
    ...rest
  } = props

  const rootClassName = `px-7 h-[40px] min-w-[150px] focus:outline-none ${color} ${className}`

  return href ? (
    !external ? (
      <Link href={href} passHref>
        <button className={rootClassName}>{label}</button>
      </Link>
    ) : targetBlank ? (
      <a href={href} target="_blank" rel="noreferrer">
        <button className={rootClassName}>{label}</button>
      </a>
    ) : (
      <a href={href}>
        <button className={rootClassName}>{label}</button>
      </a>
    )
  ) : (
    <button className={rootClassName} type={type} onClick={onClick}>
      <div className="flex items-center justify-center w-full">
        {loading ? <Spinner /> : <p>{label}</p>}
      </div>
    </button>
  )
}

export default Button
