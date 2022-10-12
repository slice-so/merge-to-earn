import { domain } from "@components/common/Head"
// import fetcher from "@utils/fetcher"
import { GetServerSideProps } from "next"

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${domain}</loc>
      </url>
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  // const { dynamicContent } = await fetcher(`${baseUrl}/`)

  // We generate the XML sitemap with the posts data
  // const sitemap = generateSiteMap(dynamicContent)

  // or with static data
  const sitemap = generateSiteMap()

  res.setHeader("Content-Type", "text/xml")
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
