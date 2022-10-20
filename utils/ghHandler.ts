import { Octokit } from "@octokit/core"
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods"
import { createAppAuth } from "@octokit/auth-app"

export function getOctokit(installationId: number) {
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
  issueNumber: number,
  message: string,
  installationId: number
) {
  const octokit = getOctokit(installationId)
  const { data } = await octokit.rest.issues.createComment({
    owner: owner,
    repo: repo,
    issue_number: issueNumber,
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
    owner: owner,
    repo: repo,
    comment_id: comment_id,
    body: message
  })
  return data
}
