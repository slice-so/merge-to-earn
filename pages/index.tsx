import { NextSeo } from "next-seo"
import { Container, DoubleText, Main } from "@components/ui"
import {
  defaultDescription,
  defaultTitle,
  longTitle,
  domain
} from "@components/common/Head"

export default function Home() {
  return (
    <>
      <NextSeo
        title="My website"
        openGraph={{
          title: longTitle,
          description: defaultDescription,
          url: domain,
          images: [
            {
              url: `${domain}/og_image.jpg`,
              width: 1000,
              height: 1000,
              alt: `${defaultTitle} cover image`
            }
          ]
        }}
      />
      <Container page={true}>
        <main className="max-w-screen-lg pb-10 mx-auto text-center">
          <div className="pb-20">
            <div className="pb-2">
              <DoubleText
                inactive
                logoText="Merge to earn"
                size="text-4xl sm:text-5xl"
                position="mr-4"
              />
            </div>
            <p className="pt-3 opacity-70">Companion interface</p>
          </div>
          <Main />
        </main>
      </Container>
    </>
  )
}
