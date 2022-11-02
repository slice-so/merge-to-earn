import { DoubleText, FAQsItem } from ".."
import { faqsMain } from "@lib/content/faqsContent"
import { useRouter } from "next/router"

const FAQs = () => {
  const router = useRouter()
  const anchor = router.asPath.split("#")[1]

  return (
    <>
      <div className="px-2 pt-12 text-center" id="faq">
        <h1 className="pb-8 sm:pb-12">
          <DoubleText inactive logoText="FAQs" size="text-3xl sm:text-4xl" />
        </h1>
        <ul className="max-w-screen-sm pb-16 mx-auto prose text-left">
          {faqsMain.map((faq, key) => (
            <FAQsItem
              key={key}
              question={faq.question}
              answer={faq.answer}
              id={faq.id}
              anchor={anchor}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default FAQs
