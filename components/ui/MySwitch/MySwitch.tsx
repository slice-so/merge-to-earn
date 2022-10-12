import { Dispatch, SetStateAction, useState } from "react"
import { Switch } from "@headlessui/react"

type Props = {
  enabled: boolean
  setEnabled: Dispatch<SetStateAction<boolean>> | { (): void }
}

const MySwitch = ({ enabled, setEnabled }: Props) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-green-500" : "bg-gray-800"}
          relative inline-flex flex-shrink-0 h-[26px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-[22px]" : "translate-x-0"}
            pointer-events-none inline-block h-[22px] w-[26px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  )
}

export default MySwitch
