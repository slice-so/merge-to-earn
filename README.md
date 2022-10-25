![Merge to earn banner](/public/twitter_card.jpg)

**Automate rewarding contributors with a slice of ownership over a project and its earnings, when pull requests are merged.**

## Install

1. [Install Merge to earn](https://github.com/apps/merge-to-earn/installations/new/) Github app on one or more repositories
2. Initialize the app for each repo on [mte.slice.so](https://mte.slice.so) by following the [setup process](#setup-process)

### Setup process

Merge to earn (MTE) relies on:

- A [Slicer](https://slice.so), used to split the project's ownership and earnings among multiple contributors;
- A [Gnosis Safe](gnosis-safe.io/app), typically owned by the project's maintainers, used to approve slice distributions during PR merge.

The setup process is carried out on [mte.slice.so](https://mte.slice.so) by someone who is both owner of the repo and the safe related to the project. It consists in:

1. Delegating MTE to propose transactions on the appointed safe;
2. Creating a slicer to represent the project.

## How it works

When a pull request is opened:

- A comment is posted with instructions on how to request a **slice distribution**;
- The MTE bot will keep updating the scheduled slice distribution in the PR discussion, as new requests are made;
- The PR owner can edit the scheduled distribution anytime, for example as new commits are made or after discussing with the reviewer.

When a PR is merged:

- A transaction to mint the agreed amount of slices is proposed by MTE on the project's Gnosis Safe;
- Once maintainers sign and submit the transaction, the contributors will receive the agreed-upon slices. As a result they will receive a proportional share of earnings related to the project's Slicer from that moment onward, directly on [slice.so](https://slice.so).

> See it in action on this [Demo PR](https://github.com/slice-so/merge-to-earn/pull/4)

<details>
<summary>MTE first comment and instructions (click to expand)</summary>
<img src='/public/main.png'/>
</details>

<details>
<summary>Example scenario (click to expand)</summary>

- A project starts with 1000 slices to each of its 5 creators, for their initial work. The creators share equal ownership over the project's slicer, and those who act as maintainers are also owners of the Gnosis Safe which approves new slice distributions.

  > Any payment sent to the slicer at this stage will be split equally between creators (20%) each.

- A new contributor opens a PR and asks for 500 slices for its work. Once the PR is merged and the transaction is submitted on the safe, slices are minted to its wallet.
  > Any payment sent to the slicer at this stage will be split: ~9% to the contributor, ~18% to each project creator

As a result, **contributors are retributed proportionally to their work and receive earnings based on when their PRs were merged.**

Everything is handled transparently on-chain, while Github settings and permissions can be used to customize what happens between opening and merging a PR.

</details>

## Notes

- Each PR will have a pinned MTE comment showing the scheduled slice distribution.
- Contributors can manage their slices and withdraw any earnings on [slice.so](https://slice.so). Slices are ERC1155 tokens so they can also be managed on the owner's ETH wallet and can be freely transferred (learn more on [slice.so](https://slice.so)).
- If a PRs is merged while previous mint proposals haven&apos;t been executed, **a new transaction will be proposed which includes all those not yet executed queued on the same nonce**. It is thus possible combining multiple proposals in a single transaction, by executing the last transaction proposed by MTE on a safe.
- When a slicer is created on [mte.slice.so](https://mte.slice.so), the appointed Gnosis Safe becomes its controller and is able to **mint or burn new slices** or sell products on the slicer's decentralized store.

## Learn more

- [Merge to earn - website](https://mte.slice.so)
- [Slice protocol](https://slice.so)
- [Support (Discord)](https://discord.gg/c7puDHjgMU)
