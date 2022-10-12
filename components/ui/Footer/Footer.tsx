import { Container, Social } from "@components/ui"
import { accounts } from "../Social/Social"

const Footer = () => {
  return (
    <footer className="relative z-20 py-8 text-center bg-white shadow-sm">
      <Container>
        <Social wrapperClassName="flex justify-center" accounts={accounts} />
      </Container>
    </footer>
  )
}

export default Footer
