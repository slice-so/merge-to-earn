import { NextSeo } from "next-seo"
import { Container, DoubleText, Main } from "@components/ui"
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
            <p className="pt-3 text-gray-500">
              The best way to automate open source development
            </p>
          </div>

          <div className="mx-auto prose">
            <p>
              Merge to earn is a{" "}
              <a
                href={accounts["github"]}
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                Github action
              </a>{" "}
              to automatically reward contributors with a slice of ownership of
              the project they contributed to, when a PR is merged. Based on{" "}
              <a
                href="https://slice.so"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                slicers
              </a>{" "}
              and multisig Gnosis Safes.
            </p>
            <p>Use this app to set up a slicer and safe for your repository.</p>
          </div>
          <Main />
        </main>
      </Container>
    </>
  )
}
