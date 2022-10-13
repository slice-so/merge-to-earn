import { FC } from "react"
// import Image from "next/image"

export interface Props {
  className?: string
}

const Background: FC<Props> = (props) => {
  const { className, ...rest } = props
  const rootClassName = `
    ${className} absolute w-full h-full -z-10 bg-white`

  return (
    <div className={rootClassName}>
      {/* <div className="opacity-20">
        <Image
          src="/background.jpg"
          alt={`Sfondo ${serie.title}`}
          layout="fill"
          quality="85"
          priority
        />
      </div> */}
    </div>
  )
}

export default Background
