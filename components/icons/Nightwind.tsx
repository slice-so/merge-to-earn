"use client"

import { useTheme } from "next-themes"
import nightwind from "nightwind/helper"

const Nightwind = ({ ...props }) => {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    nightwind.beforeTransition()
    if (theme !== "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      onClick={props.onClick || toggle}
      className={`${
        props.size || "h-10"
      } w-auto cursor-pointer group mx-auto z-10`}
    >
      <circle
        cx="70"
        cy="70"
        r="70"
        fill="currentColor"
        className={`${props.moonColor || "text-blue-500"} 
          ${props.moonColorNight || "dark:text-yellow-300"} ${
          props.transition || ""
        } transition-colors duration-150`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.5612 138.876C55.6458 126.762 37 100.476 37 70C37 39.5244 55.6458 13.2383 82.5613 1.1239C115.227 7.04239 140 35.6281 140 70C140 104.372 115.227 132.958 82.5612 138.876Z"
        fill="currentColor"
        className={`${
          props.sunColor || "text-yellow-300 group-hover:text-blue-200"
        } ${
          props.sunColorNight ||
          "dark:text-blue-500 dark:group-hover:text-yellow-500"
        } ${props.transition || ""}`}
      />
    </svg>
  )
}

export default Nightwind
