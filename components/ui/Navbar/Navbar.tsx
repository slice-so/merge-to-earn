import Link from "next/link"
import { useRouter } from "next/router"
// import { signIn, useSession } from "next-auth/client"
import Logo from "@components/icons/Logo"
// import Nightwind from "@components/icons/Nightwind"
import { Container } from "@components/ui"

const Navbar = () => {
  // const [session, loading] = useSession()
  // const router = useRouter()

  return (
    <header className="shadow-sm">
      <Container>
        <nav className="relative px-3 sm:px-6 h-[4.25rem] items-center mx-auto flex justify-between">
          <div className="flex items-center space-x-7 sm:space-x-10">
            <Link href="/">
              <a className="mb-1" aria-label="My website logo">
                <Logo size="w-[24px]" />
              </a>
            </Link>
          </div>
          <div className="relative z-10 flex items-center space-x-6">
            {/* <div>
            <Nightwind size="h-[24px]" />
          </div> */}
          </div>
        </nav>
      </Container>
      <hr className="w-full border-gray-200" />
    </header>
  )
}

export default Navbar
