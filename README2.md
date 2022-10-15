# Merge to earn - Github action

**Automate rewarding contributors with a slice of ownership over a project and its earnings.**

## How it works

1. Project owner sets up the workflow (see [Setup](#setup))
2. When a PR is opened:

- A comment is automatically posted in the PR with instructions on how to request a slice reward.
- The PR owner can comment with a template to request a reward for the PR. The bot will keep updating the scheduled slice distribution in the PR discussion.
- The PR owner can edit the scheduled distribution anytime, for example as new commits are made or after discussing with the reviewer.

3. When a PR is merged, a transaction proposal to mint the agreed amount of slices is created on the Gnosis Safe.
4. Once the maintainers sign and submit the transaction, the contributors will receive the agreed-upon slices. This allows them to receive a proportional share of earnings related to the project's Slicer from that moment onward, directly on [slice.so](slice.so).

## Install

Merge to earn relies on:

- A Slicer, used to permissionlessly split a project's ownership and earnings among multiple contributors;
- A Gnosis Safe, typically owned by the project's maintainers, used to approve slice distributions.

The installation process consists of the following steps:

1. The project owner creates a Gnosis Safe on [gnosis-safe.io](gnosis-safe.io/app), eventually adding other maintainers as owners;
2. One of the Safe owners uses the companion app at [mte.slice.so](mte.slice.so) to delegate "Merge to earn" and create a Slicer (see [the companion app](#the-companion-app));
3. On the project's repository, install the Github action with the required environmental variables (see [Github action installation](#github-action-installation)).

### Github action installation

...

### The companion app

The companion app is used to:

- Delegate "Merge to earn" to create transaction proposals on a Gnosis Safe;
- Create a Slicer controlled by the Safe, allowing it to modify Slicer distribution on demand.

## Learn more

- [Merge to earn - Companion app](mte.slice.so)
- [Slice protocol](slice.so)
