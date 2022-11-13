import { Button, InputSelect } from "@components/ui"
import { Repository } from "@octokit/webhooks-types"
import saEvent from "@utils/saEvent"
import { Dispatch, SetStateAction } from "react"

export type RepoResponse = {
  installation_id: number
  total_count: number
  repositories: Repository[]
}

export type Repo = {
  repoId: number
  installationId: number
}

type Props = {
  repo: Repo
  setRepo: Dispatch<SetStateAction<Repo>>
  repoList: RepoResponse[]
}

const FormGithub = ({ repo, setRepo, repoList }: Props) => {
  const availableRepos = repoList
    ?.map((repoRes) =>
      repoRes.repositories.map((el: any) => ({
        value: el.id,
        name: el.full_name,
        installationId: repoRes.installation_id
      }))
    )
    .flat()

  const handleSetRepo = (value: string) => {
    saEvent("set_repo")
    const installationId = availableRepos.find(
      (repo) => repo.value == value
    ).installationId
    setRepo({ repoId: Number(value), installationId })
  }

  return availableRepos?.length == 0 ? (
    <div>
      <p className="pb-4 font-medium">
        You still have to install the app on your repositories
      </p>
      <Button
        type="button"
        label="Install Merge to earn"
        href="https://github.com/apps/merge-to-earn/installations/new/"
        external
        onClick={() => saEvent("install_main")}
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
            onClick={() => saEvent("install_more")}
          >
            Install on more repos
          </a>
        }
        value={String(repo?.repoId)}
        setValue={handleSetRepo}
        options={availableRepos}
      />
    </>
  )
}

export default FormGithub
