"use client" // TODO: To remove

import { ThemeProvider } from "next-themes"
import Head from "@components/common/Head"
import { Background, Layout } from "@components/ui"
import "../styles/global/styles.scss"
import { AppWrapper } from "@components/ui/context"

import { SessionProvider } from "next-auth/react"

import { Rubik } from "@next/font/google"
import WalletProvider from "@components/client/WalletProvider"

const rubik = Rubik()

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.className}>
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="dark"
        >
          <WalletProvider>
            <SessionProvider>
              <AppWrapper>
                <Layout>
                  <Background />
                  {children}
                </Layout>
              </AppWrapper>
            </SessionProvider>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
