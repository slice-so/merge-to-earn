import dynamic from "next/dynamic"
import { useAppContext } from "@components/ui/context"
import { Navbar, Footer } from "@components/ui"

const Modal = dynamic(() => import("@components/ui/Modal"), {
  ssr: false
})

export interface Props {
  line?: boolean
}

export default function Layout({ children }) {
  const { modalView, setModalView } = useAppContext()

  return (
    <>
      <div className="relative flex flex-col justify-between min-h-screen">
        <Navbar />
        {children}
        <Footer />
        {modalView.name && (
          <Modal modalView={modalView} setModalView={setModalView} />
        )}
      </div>
    </>
  )
}
