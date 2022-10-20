import { Button, InputSelect } from "@components/ui"
import fetcher from "@utils/fetcher"
import { useSession } from "next-auth/react"
import { Dispatch, SetStateAction } from "react"
import useSWR from "swr"

type Props = {
  repo: string
  setRepo: Dispatch<SetStateAction<string>>
}

const FormGithub = ({ repo, setRepo }: Props) => {
  const { data: session } = useSession()
  const { data: repoList } = useSWR(
    session?.accessToken
      ? `https://a12a-2-38-25-82.eu.ngrok.io//api/getRepo?token=${session.accessToken}`
      : null,
    fetcher
  )

  const availableRepos = repoList?.data?.installations?.map((el: any) => ({
    value: el.id,
    name: el.app_slug
  }))

  // TODO: Add check if repo already has been set up for mte

  return repoList?.data.total_count == 0 ? (
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
    <>
      <InputSelect
        label="Repository"
        genericText="Pick one of your repos"
        labelAction={
          <a
            className="w-full text-sm text-right text-blue-600 hover:underline"
            href="https://github.com/apps/merge-to-earn/installations/new/"
            target="_blank"
            rel="noreferrer"
          >
            Install on more repos
          </a>
        }
        value={repo}
        setValue={setRepo}
        options={availableRepos}
      />
    </>
  )
}

export default FormGithub
