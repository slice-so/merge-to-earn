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
          <div className="p-3 dark:text-white items-center rounded-md hover:bg-red-100 dark:hover:!bg-red-900 dark:hover:!text-red-100 hover:text-white flex">
            <div className="ml-3">{image}</div>
            <p className="ml-4 font-normal">{label}</p>
          </div>
        </Link>
      ) : (
        <div className="p-3 dark:text-white items-center rounded-md hover:bg-red-50 dark:hover:!bg-red-900 dark:hover:!text-red-100 hover:text-red-600 flex cursor-pointer">
          <div className="ml-3">{image}</div>
          <p className="ml-4 font-normal">{label}</p>
        </div>
      )}
    </div>
  )
}

export default DropdownMenuElement
