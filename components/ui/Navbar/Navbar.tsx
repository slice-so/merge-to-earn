import Link from "next/link"
import Logo from "@components/icons/Logo"
import Nightwind from "@components/icons/Nightwind"
import { Container } from "@components/ui"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useSession } from "next-auth/react"
import Image from "next/future/image"
import Chevron from "@components/icons/Chevron"
import dynamic from "next/dynamic"
import { useState } from "react"

const DropdownMenu = dynamic(() => import("@components/ui/DropdownMenu"), {
  ssr: false
})

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="shadow-sm">
      <Container>
        <nav className="relative px-3 sm:px-6 h-[4.25rem] items-center mx-auto flex justify-between">
          <div className="flex items-center space-x-7 sm:space-x-10">
            <Link href="/">
              <a className="mb-1" aria-label="Merge to earn logo">
                <Logo size="w-[24px]" />
              </a>
            </Link>
          </div>
          <div className="relative z-10 flex items-center space-x-4 sm:space-x-6">
            <div>
              <Nightwind size="h-[24px]" />
            </div>
            <ConnectButton showBalance={false} />
            {session && (
              <div
                className="flex items-center h-10 gap-1 px-3 transition-transform duration-150 bg-white border border-white shadow-md cursor-pointer nightwind-prevent rounded-xl border-opacity-80 hover:scale-105"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <Image
                  src={session.user.image}
                  width={28}
                  height={28}
                  alt="Github avatar"
                  className="rounded-full"
                />
                <Chevron className="w-4 text-black -rotate-90 nightwind-prevent" />
              </div>
            )}
            {showDropdown && (
              <div className="absolute bottom-0 right-0 group-hover:block">
                <DropdownMenu />
              </div>
            )}
          </div>
        </nav>
      </Container>
      <hr className="w-full border-gray-200" />
    </header>
  )
}

export default Navbar
