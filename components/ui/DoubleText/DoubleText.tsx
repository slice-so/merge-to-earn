import { FC } from "react"
import Link from "next/link"

interface Props {
  logoText?: string | JSX.Element
  altLogoText?: string | JSX.Element
  size?: string
  position?: string
  inactive?: boolean
  inverted?: boolean
  color?: string
}

const DoubleText: FC<Props> = ({
  logoText,
  altLogoText,
  size,
  position,
  inactive,
  inverted,
  color
}) => {
  return (
    <span
      className={`inline-block relative ${inactive ? "" : "group "}${
        position ? position : "absolute top-0 left-0"
      }`}
    >
      {inactive ? (
        <span
          className={`${
            inverted ? "text-white" : "text-black"
          } relative z-10 !font-black cursor-default ${
            size || "text-2xl md:text-3xl"
          }`}
        >
          {logoText}
        </span>
      ) : (
        <Link href="/">
          <a
            className={`${
              inverted ? "text-white" : "text-black"
            } relative z-10 !font-black ${size || "text-2xl md:text-3xl"}`}
          >
            {logoText}
          </a>
        </Link>
      )}
      <span
        className={`absolute top-0 left-0 w-full select-none !font-black pb-3 ml-[0.1em] group-hover:mt-0 group-hover:ml-0 duration-150 ${
          inactive ? "cursor-default" : ""
        }
        ${size || "text-2xl md:text-3xl"} ${
          color ||
          "text-transparent bg-gradient-to-br bg-clip-text to-blue-300 from-sky-500"
        }`}
        style={{ marginTop: "0.1em", marginBottom: 0 }}
      >
        {altLogoText || logoText}
      </span>
    </span>
  )
}

export default DoubleText
