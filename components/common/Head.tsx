import { FC } from "react"
import NextHead from "next/head"
import { DefaultSeo } from "next-seo"
import { accounts } from "@components/ui/Social/Social"
import Script from "next/script"

export const defaultTitle = "Merge to earn"
export const longTitle =
  "Merge to earn – The reward system for open source development"
export const defaultDescription =
  "Automate rewarding contributors with a slice of ownership over a project and its earnings, when pull requests are merged."
export const domain = process.env.NEXT_PUBLIC_APP_URL
const twitterAccount = accounts.twitter.split("twitter.com/").pop()

const Head: FC = () => {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${defaultTitle}`}
        defaultTitle={longTitle}
        description={defaultDescription}
        openGraph={{
          site_name: longTitle,
          type: `website`,
          locale: `en_US`
        }}
        twitter={{
          handle: twitterAccount,
          site: twitterAccount,
          cardType: "summary_large_image"
        }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:image" content={`${domain}/twitter_card.jpg`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </NextHead>
    </>
  )
}

export default Head
