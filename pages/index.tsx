import { NextSeo } from "next-seo"
import { Container, DoubleText, FAQs, Main } from "@components/ui"
import {
  defaultDescription,
  defaultTitle,
  longTitle,
  domain
} from "@components/common/Head"
import { accounts } from "@components/ui/Social/Social"

export default function Home() {
  return (
    <>
      <NextSeo
        title={defaultTitle}
        openGraph={{
          title: longTitle,
          description: defaultDescription,
          url: domain,
          images: [
            {
              url: `${domain}/og_image.png`,
              width: 1000,
              height: 1000,
              alt: `${defaultTitle} cover image`
            }
          ]
        }}
      />
      <Container page={true}>
        <div className=" xs:min-h-[500px] flex items-center">
          <main className="max-w-screen-lg pb-10 mx-auto space-y-12 text-center">
            <div>
              <div className="pb-2">
                <DoubleText
                  inactive
                  logoText="Merge to earn"
                  size="text-4xl sm:text-5xl"
                  position="mr-4"
                />
              </div>
              <p className="pt-3 font-bold text-gray-500 xs:text-lg">
                The reward system for open source development
              </p>
            </div>

            <div className="mx-auto prose text-left max-w-screen-xs">
              <p>
                <a
                  href={accounts["github"]}
                  target="_blank"
                  rel="noreferrer"
                  className="highlight"
                >
                  Merge to earn
                </a>{" "}
                is a Github app to automate rewarding contributors with a slice
                of ownership over a project and its earnings, when pull requests
                are merged.
              </p>
              <p>
                Proceed to initialize MTE for a repo by linking it to a Gnosis
                Safe and Slicer.
              </p>
            </div>
            <Main />
          </main>
        </div>
      </Container>
      <FAQs />
    </>
  )
}
