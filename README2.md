# Merge to earn - Github action

**Merge to earn is a Github action to automate rewarding contributors with a slice of ownership over a project and its earnings.**

## How it works

- Project owner sets up the workflow (see [Setup](#setup))
- When a PR is opened:
  - A comment is automatically posted in the PR with instructions on how to request a slice reward.
  - The PR owner can comment with a template to request a reward for the PR. The bot will update its comments to highlight the scheduled slice distribution in the PR discussion.
  - The PR owner can edit the scheduled distribution anytime, for example as new commits are made or after discussing with the reviewer.
- When a PR is merged, a transaction proposal to mint the agreed amount of slices is created on the Gnosis safe.
- Once the maintainers sign and submit the transaction, the contributors will receive the agreed-upon slices. This allows them to get a proportional share of earnings related to the project's slicer from that moment onward, directly on [slice.so](slice.so).

## Setup

Merge to earn relies on:

- A slicer, used to permissionlessly split a project's ownership and earnings among multiple contributors;
- A Gnosis safe, typically owned by the project's maintainers, used to approve new slicer ownership distributions according pre-defined rules.

Before installing the Github action:

1. The project owner creates a Gnosis safe, eventually adding other maintainers as owners;
2. One of the safe owners uses the companion app to delegate "Merge to earn" and create a slicer (see [the companion app](#the-companion-app));
3. On the project's repository, install the github action with the required environmental variables.

### The companion app

The companion app is used to:

- Delegate "Merge to earn" to create transaction proposals on a Gnosis safe;
- Create a slicer controlled by the Gnosis safe, allowing it to modify slicer distribution on demand.

### Learn more

- [Merge to earn - Companion app](slice.so)
- [Slice protocol](slice.so)
