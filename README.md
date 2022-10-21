# Merge to earn app

**Automate rewarding contributors with a slice of ownership over a project and its earnings.**

## How it works

- The project owner sets up the workflow on [mte.slice.so](mte.slice.so) (see [Setup](#setup))
- When a PR is opened:

  - A comment is automatically posted in the PR with instructions on how to request a **slice distribution** as reward.
  - The PR owner can comment with a template to request a reward for the PR The bot will keep updating the scheduled slice distribution in the PR discussion.
  - The PR owner can edit the scheduled distribution anytime, for example as new commits are made or after discussing with the reviewer.

- When a PR is merged, a transaction proposal to mint the agreed amount of slices is created on the Gnosis Safe.
- Once the maintainers sign and submit the transaction, the contributors will receive the agreed-upon slices. This allows them to receive a proportional share of earnings related to the project's Slicer from that moment onward, directly on [slice.so](slice.so).

## Install

Merge to earn relies on:

- A Slicer, used to split a project's ownership and earnings among multiple contributors;
- A Gnosis Safe, typically owned by the project's maintainers, used to approve slice distributions.

The installation process consists of the following steps:

1. The project owner creates a Gnosis Safe on [gnosis-safe.io](gnosis-safe.io/app), eventually adding other maintainers as owners;
2. One of the Safe owners uses [mte.slice.so](mte.slice.so) to delegate "Merge to earn" and create a Slicer (see [the companion app](#the-companion-app));
3. On the project's repository, install the Github action with the required environmental variables (see [Github action installation](#github-action-installation)).

### Github action installation

<!-- TODO: Update this section when finalized -->

#### Inputs

- `slicer_id`: ID of the slicer related to this project (generally created on the [website](mte.slice.so))
- `alchemy_api_key`: Alchemy key required for the workflow
- `GITHUB_TOKEN`:

#### Example usage

```yml
// .github/workflows/mte.yml
name: Merge To Earn

on:
  issue_comment:
    types: [created]
  pull_request:
    types: [closed, opened]

jobs:
  mint_slices_job:
    name: Merge to Earn | Mint slices
    if: github.event.issue.pull_request || github.event.pull_request.merged == true || github.event.action == 'opened'
    runs-on: ubuntu-latest
    steps:
      - name: Mint slices
        id: mint
        uses: Dom-Mac/merge-to-earn@latest
        with:
          safe_address: "0x..."
          slicer_id: "69"
          alchemy_api_key: ${{ secrets.ALCHEMY_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### The companion app

The companion app is used to:

- Delegate "Merge to earn" to create transaction proposals on a Gnosis Safe;
- Create a Slicer controlled by the Safe, allowing it to modify Slicer distribution on demand.

## Learn more

- [Merge to earn - website](mte.slice.so)
- [Slice protocol](slice.so)
