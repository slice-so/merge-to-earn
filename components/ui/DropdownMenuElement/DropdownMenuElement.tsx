import Link from "next/link"

type Props = {
  image: JSX.Element
  label: string
  onClick: () => void
  href?: string
}

function DropdownMenuElement({ href, image, label, onClick }: Props) {
  return (
    <div onClick={onClick}>
      {href ? (
        <Link href={href}>
          <a>
            <div className="px-3 py-2.5 dark:text-white items-center rounded-md hover:bg-red-600 hover:text-white flex">
              <div className="ml-3">{image}</div>
              <p className="ml-4 font-normal">{label}</p>
            </div>
          </a>
        </Link>
      ) : (
        <div className="px-3 py-2.5 dark:text-white items-center rounded-md hover:bg-red-600 hover:text-white flex cursor-pointer">
          <div className="ml-3">{image}</div>
          <p className="ml-4 font-normal">{label}</p>
        </div>
      )}
    </div>
  )
}

export default DropdownMenuElement
