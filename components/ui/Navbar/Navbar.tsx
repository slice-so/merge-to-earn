import Link from "next/link"
import { useRouter } from "next/router"
// import { signIn, useSession } from "next-auth/client"
import Logo from "@components/icons/Logo"
import Nightwind from "@components/icons/Nightwind"
import { Container } from "@components/ui"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Github } from "@components/icons/Social"
import { accounts } from "../Social/Social"

const Navbar = () => {
  // const [session, loading] = useSession()
  // const router = useRouter()

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
          <div className="relative z-10 flex items-center space-x-6 sm:space-x-8">
            <a
              className="w-6 hover:text-purple-500"
              href={accounts["github"]}
              target="_blank"
              rel="noreferrer"
              aria-label="Github logo"
            >
              <Github />
            </a>
            <div>
              <Nightwind size="h-[24px]" />
            </div>
            <ConnectButton showBalance={false} />
          </div>
        </nav>
      </Container>
      <hr className="w-full border-gray-200" />
    </header>
  )
}

export default Navbar
