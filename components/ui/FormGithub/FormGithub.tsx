import { Button } from "@components/ui"
import fetcher from "@utils/fetcher"
import { useSession } from "next-auth/react"
import { Dispatch, SetStateAction } from "react"
import useSWR from "swr"

type Props = { setRepo: Dispatch<SetStateAction<string>> }

const FormGithub = ({ setRepo }: Props) => {
  const { data: session } = useSession()
  const { data: repo } = useSWR(
    session?.accessToken
      ? `https://a12a-2-38-25-82.eu.ngrok.io//api/getRepo?token=${session.accessToken}`
      : null,
    fetcher
  )

  return (
    <div className="space-y-6">
      {repo?.data.total_count == 0 ? (
        <div>
          <p className="pb-4 font-medium">
            You still have to install Merge to earn on your repositories
          </p>
          <Button
            type="button"
            label="Install Merge to earn"
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
