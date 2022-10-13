import { ClickToComponent } from "click-to-react-component"
import { ThemeProvider } from "next-themes"
import Head from "@components/common/Head"
import { Background, Layout } from "@components/ui"
import "../styles/global/styles.scss"
import { AppWrapper } from "@components/ui/context"
import { AppProps } from "next/dist/shared/lib/router/router"

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { chain, createClient, configureChains, WagmiConfig } from "wagmi"
import "@rainbow-me/rainbowkit/styles.css"

const defaultChains = [chain.mainnet]

const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
  publicProvider()
])

const { connectors } = getDefaultWallets({
  appName: "Slice",
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClickToComponent />
      <Head />
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="dark"
      >
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode>
            <AppWrapper>
              <Layout>
                <Background />
                <Component {...pageProps} />
              </Layout>
            </AppWrapper>
          </RainbowKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </>
  )
}

export default MyApp
