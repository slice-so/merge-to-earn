import { ClickToComponent } from "click-to-react-component"
import { ThemeProvider } from "next-themes"
import Head from "@components/common/Head"
import { Background, Layout } from "@components/ui"
import "../styles/global/styles.scss"
import { AppWrapper } from "@components/ui/context"
import { AppProps } from "next/dist/shared/lib/router/router"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClickToComponent />
      <Head />
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="system"
      >
        <AppWrapper>
          <Layout>
            <Background />
            <Component {...pageProps} />
          </Layout>
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp
