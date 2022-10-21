# Merge to earn

**Automate rewarding contributors with a slice of ownership over a project and its earnings, when pull requests are merged.**

## Install

- [Install Merge to earn](https://github.com/apps/merge-to-earn/installations/new/) Github app on the one or more repositories
- Initialize the app for a repo on [mte.slice.so](mte.slice.so) by following the [setup process](#setup-process)

### Setup process

Merge to earn (MTE) relies on:

- A [Slicer](https://slice.so), used to split the project's ownership and earnings among multiple contributors;
- A [Gnosis Safe](gnosis-safe.io/app), typically owned by the project's maintainers, used to approve slice distributions during PR merge.

The setup process is carried out on [mte.slice.so](mte.slice.so) by someone who is both owner of the repo and the safe related to the project. The process consists in:

1. Delegating MTE to propose transactions on the appointed safe;
2. Create a slicer to represent the project.

## How it works

When a pull request is opened:

- A comment is posted with instructions on how to request a **slice distribution**;
- The MTE bot will keep updating the scheduled slice distribution in the PR discussion, as new requests are made;
- The PR owner can edit the scheduled distribution anytime, for example as new commits are made or after discussing with the reviewer.

When a PR is merged:

- A transaction to mint the agreed amount of slices is proposed on the project's Gnosis Safe;
- Once the maintainers sign and submit the transaction, the contributors will receive the agreed-upon slices. This allows them to receive a proportional share of earnings related to the project's Slicer from that moment onward, directly on [slice.so](https://slice.so).

## Notes

- In each PR with MTE installed, a pinned comment is kept updated by the bot which reflects the latest submitted valid slice configuration.
- Contributors can manage their slices and withdraw any earnings on [slice.so](https://slice.so). Slices are ERC1155 tokens so they can also be found on the owner's wallet and can be freely transferred.
- If a PRs is merged while previous mint proposals haven&apos;t been executed, **a new transaction will be proposed which includes all those not yet executed queued on the same nonce**. It is thus possible combining multiple proposals in a single transaction, by executing the last transaction proposed by MTE on a safe.
- When a slicer is created on mte.slice.so, a Gnosis Safe becomes its controller allowing it to **mint or burn new slices** and sell products on the slicer's decentralized store.

## Learn more

- [Merge to earn - website](mte.slice.so)
- [Slice protocol](https://slice.so)
