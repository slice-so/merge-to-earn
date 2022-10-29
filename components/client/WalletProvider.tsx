"use client"

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { chain, createClient, configureChains, WagmiConfig } from "wagmi"
import "@rainbow-me/rainbowkit/styles.css"

const defaultChains = [chain[process.env.NEXT_PUBLIC_ENV]]

const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
  publicProvider()
])

const { connectors } = getDefaultWallets({
  appName: "Merge to earn",
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function WalletProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        showRecentTransactions={true}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
