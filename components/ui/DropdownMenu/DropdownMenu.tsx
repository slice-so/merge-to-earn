import Cross from "@components/icons/Cross"
import { signOut } from "next-auth/react"
import { Dispatch, SetStateAction } from "react"
import { DropdownMenuElement } from ".."
type Props = {}

function DropdownMenu({}: Props) {
  return (
    <div
      className={`z-20 absolute top-0 right-0 w-64 border border-opacity-80 mt-8 border-gray-200 space-y-1 bg-white rounded-lg shadow-base transition-opacity duration-200 nightwind-prevent-block`}
    >
      <DropdownMenuElement
        image={<Cross />}
        label="Sign out from Github"
        onClick={() => signOut()}
      />
    </div>
  )
}

export default DropdownMenu
