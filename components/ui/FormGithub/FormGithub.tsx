import { Button, InputSelect } from "@components/ui"
import { Dispatch, SetStateAction } from "react"

type Props = {
  repoId: string
  setRepoId: Dispatch<SetStateAction<string>>
  repoList: any
}

const FormGithub = ({ repoId, setRepoId, repoList }: Props) => {
  const availableRepos = repoList?.repositories.map((el: any) => ({
    value: el.id,
    name: el.name
  }))

  return repoList?.total_count == 0 ? (
    <div>
      <p className="pb-4 font-medium">
        You still have to install the app on your repositories
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
        value={repoId}
        setValue={setRepoId}
        options={availableRepos}
      />
    </>
  )
}

export default FormGithub
