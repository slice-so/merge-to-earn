![Merge to earn banner](/public/twitter_card.jpg)

**Automate rewarding contributors with a slice of ownership over a project and its earnings, when pull requests are merged.**

## Install

1. [Install Merge to earn](https://github.com/apps/merge-to-earn/installations/new/) Github app on one or more repositories
2. Initialize the app for each repo on [mte.slice.so](https://mte.slice.so) by following the [setup process](#setup-process)

### Setup process

Merge to earn (MTE) relies on:

- A [Slicer](https://slice.so), to split the project's ownership and earnings among multiple contributors;
- A [Gnosis Safe](https://gnosis-safe.io/app), typically owned by the project's maintainers, to execute rewards distributions.

The setup process is carried out on [mte.slice.so](https://mte.slice.so) by someone who is both owner of the repo and the safe related to the project. It consists in:

1. Delegating MTE to propose transactions on the appointed safe;
2. Creating a slicer to represent the project.

## How it works

When a pull request is opened:

- A comment is automatically posted with instructions on how to request a slice reward;
- The MTE bot keeps updating the scheduled slice distribution in the PR discussion, as new requests are made;
- The PR owner can edit the scheduled distribution anytime, for example as new commits are made or after discussing with the reviewer.

When a PR is merged:

- MTE proposes on the project's Gnosis Safe a transaction to mint the agreed amount of slices;
- Once maintainers sign and submit the transaction, the contributors receive the reward. As a result they will receive a proportional share of earnings related to the project's Slicer from that moment onward, directly on [slice.so](https://slice.so).

> See it in action on this [Demo PR](https://github.com/slice-so/merge-to-earn/pull/4)

<details>
<summary>MTE first comment and instructions (click to expand)</summary>
<img src='/public/main.png'/>
</details>

<details>
<summary>Example scenario (click to expand)</summary>

- A project starts with 1000 slices to each of its 5 creators, for their initial work. The creators share equal ownership over the project's slicer, and those who act as maintainers are also owners of the Gnosis Safe which approves new slice distributions.

  > Any payment sent to the slicer at this stage will be split equally between creators (20% each).

- A new contributor opens a PR and asks for 500 slices for its work. Once the PR is merged and the transaction is submitted on the safe, slices are minted to its wallet.
  > Any payment sent to the slicer at this stage will be split: ~9% to the contributor, ~18% to each project creator

As a result, **contributors are retributed proportionally to their work and receive earnings based on when their PRs were merged.**

Everything is handled transparently on-chain, while Github settings and permissions can be used to customize what happens between opening and merging a PR.

</details>

## Notes

- Each PR has a pinned MTE comment showing the scheduled slice distribution.
- Contributors can manage their slices and withdraw any earnings on [slice.so](https://slice.so). Slices are ERC1155 tokens so they can also be managed on the owner's ETH wallet and can be freely transferred (learn more on [slice.so](https://slice.so)).
- If a PRs is merged while previous mint proposals haven&apos;t been executed, **a new transaction will be proposed which includes all those not yet executed queued on the same nonce**. It is thus possible to combine multiple proposals in a single transaction, by executing the last transaction proposed by MTE on a safe for each nonce.
- When a slicer is created on [mte.slice.so](https://mte.slice.so), the appointed Gnosis Safe becomes its controller and is able to **mint or burn new slices** or sell products on the slicer's decentralized store.
- The max total number of slices that can be created for a project is 4B. See below the suggestion on [how to quantify slices as reward](#how-many-slices-to-give-when-merging-prs).

## Suggestions for maintainers

<details>
<summary>How many slices to give when merging PRs</summary>

- We suggest rewarding 1 slice for 1$ value of work. This greatly facilitates estimating what amount to reward for PRs, issues and when initializing a repo.

</details>

<details>
<summary>Add reward tags to issues and PRs</summary>

- To incentivise and prioritise contributions, you can add tags to issues and PRs to signal the potential reward for contributors.

</details>

## Addressing security concerns

Merge to earn projects can be considered safe against attackers attempting to steal earnings by compromising Github accounts or ETH wallets.

In fact, compromising a project is not worth for an attacker as it:

- Requires satisfying hard requirements;
- Yields low rewards;
- Can be easily and quickly mitigated by project owners.

#### Github account compromised

Let's consider the case where an attacker gains access to a maintainer's Github account. In this case, **they would be able to merge fake PRs and propose malicious transactions to the project's multisig** to reward themselves with slices.

However, **nothing would happen until the quorum of multisig owners execute the malicious transaction**. If maintainers are aware an attack has happened, or just check the accuracy of the transactions to be executed (as it's always advised to) this scenario is highly unlikely to happen.

But even if maintainers mistakenly execute a malicious transaction, **they still have plenty of time to get the situation under control by reverting the undesired outcome**. In this case the attacker only gets part of the earnings that were received by the project between the moment their transaction was executed and when it was reverted, which in most cases should be a negligible amount.

#### Gnosis Safe compromised

A more complex attack would involve the attacker obtaining the private keys of enough multisig owners' wallets, allowing them to **autonomously execute transactions on the project's Gnosis Safe**. This is extremely hard to achieve, especially for multisig with a high quorum, but let's consider this scenario anyway.

Due to how slicers are designed, **an attacker wouldn't still be able to get the project earnings received until that point, but only what was received after he gained control** and executed a malicious transaction. The Slice protocol has been designed to safeguard against this kind of attacks.

On the contrary, to mitigate such an attack, **project owners just need to reinitialize MTE for their repository with a new slicer and multisig**, distribute ownership to contributors as it was before the attack, and redirect any future earnings to the new slicer. This is technically trivial and can be done in minutes, rendering an attacker powerless.

## Learn more

- [Merge to earn - website](https://mte.slice.so)
- [Slice protocol](https://slice.so)
- [Support (Discord)](https://discord.gg/c7puDHjgMU)

## Contributing

This project uses Merge to earn to reward contributors with a piece of the [Merge to earn slicer](https://slice.so/slicer/23) and its earnings, when pull requests are merged.
