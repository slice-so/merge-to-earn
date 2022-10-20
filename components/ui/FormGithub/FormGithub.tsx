import { Button } from "@components/ui"
import fetcher from "@utils/fetcher"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import useSWR from "swr"

type Props = { session: Session }

const FormGithub = ({ session }: Props) => {
  const { data: repo } = useSWR(
    session?.accessToken
      ? `https://a12a-2-38-25-82.eu.ngrok.io//api/getRepo?token=${session.accessToken}`
      : null,
    fetcher
  )
  return (
    <div className="space-y-6">
      <div>
        <Button label="Sign out" onClick={() => signOut()} />
      </div>
      {repo?.data.total_count == 0 ? (
        <div>
          <Button
            label="Install app on your repositories"
            href="https://github.com/apps/merge-to-earn/installations/new/"
            external
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormGithub
