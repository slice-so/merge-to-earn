import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const baseUrl = process.env.NEXTAUTH_URL

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
      authorization: {
        params: {
          redirect_uri: `${baseUrl}/api/auth/callback/github`,
          state: process.env.GITHUB_STATE_SECRET,
          login: "",
          allow_signup: "true",
          scope: ""
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
})
