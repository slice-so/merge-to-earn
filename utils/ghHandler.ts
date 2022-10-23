import { Octokit } from "@octokit/core"
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods"
import { createAppAuth } from "@octokit/auth-app"

export function getOctokit(installationId?: number) {
  const privateKey = Buffer.from(
    process.env.GH_APP_PRIVATE_KEY,
    "base64"
  ).toString("utf8")
  const RestOctokit = Octokit.plugin(restEndpointMethods)
  const octokit = new RestOctokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.GH_APP_ID,
      privateKey,
      clientId: process.env.GH_APP_CLIENT_ID,
      clientSecret: process.env.GH_APP_CLIENT_SECRET,
      installationId: installationId
    }
  })

  return octokit
}

export async function createComment(
  owner: string,
  repo: string,
  issue_number: number,
  message: string,
  installationId: number
) {
  const octokit = getOctokit(installationId)
  const { data } = await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number,
    body: message
  })

  return data
}

export async function editComment(
  owner: string,
  repo: string,
  comment_id: number,
  message: string,
  installationId: number
) {
  const octokit = getOctokit(installationId)
  const { data } = await octokit.rest.issues.updateComment({
    owner,
    repo,
    comment_id,
    body: message
  })
  return data
}

export async function getComments(
  owner: string,
  repo: string,
  issue_number: number,
  installationId: number
) {
  const octokit = getOctokit(installationId)
  const { data } = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number,
    per_page: 100
  })
  return data
}
