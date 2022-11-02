import Link from "next/link"

export const faqsMain = [
  {
    question: "How does Merge to earn work?",
    answer: (
      <>
        <p>
          Setting up a repo with Merge to earn means linking it to a Slicer and
          Gnosis Safe, respectively used to to split project&apos;s ownership
          and execute reward distributions.
        </p>
        <p>
          Anyone can then open pull requests and request a reward in the form of{" "}
          <b>slices</b>, ERC1155 tokens representing ownership over the project
          and its earnings.
        </p>
        <p>The process is as follows:</p>
        <ol>
          <li>
            The PR owner comments to request a reward, or to update an existing
            request;
          </li>
          <li>
            When a maintainer merges the PR, the request is also approved
            resulting in a transaction being proposed on the project&apos;s
            multisig;
          </li>
          <li>
            Once the transaction is approved by a quorum of maintainers and
            executed, the contributor receives the agreed slices at the
            designated ETH address.
          </li>
        </ol>
      </>
    ),
    id: "mte"
  },
  {
    question: "How is ownership split between contributors over time?",
    answer: (
      <>
        <p>
          When rewards are distributed, new slices are minted to contributors,
          resulting in existing project owners being diluted by new
          contributors.
        </p>
        <p>
          It should be noted that contributors only earn from earnings after
          they received the slices, not from previous amounts accrued by the
          slicer.
        </p>
      </>
    ),
    id: "split"
  },
  {
    question: "What are slicers and slices?",
    answer: (
      <>
        <p>
          <b>Slicers</b> are:
          <ol>
            <li>
              Smart contracts which split any payment they receive to their
              owners;
            </li>
            <li>
              Decentralized stores (d-stores) from where it&apos;s possible to
              sell anything, in any currency, fully on-chain.
            </li>
          </ol>
        </p>
        <p>
          <b>Slices</b> are ERC1155 tokens representing{" "}
          <b>ownership over a slicer and its earnings</b>. By owning 10% of the
          slices of a slicer you get 10% of any payment it receives.
        </p>
        <p>
          Being based on slicers, Merge to earn projects can leverage features
          like <b>dynamic payments splitting</b> and <b>decentralized stores</b>
          . Visit{" "}
          <a
            href="https://slice.so"
            target="_blank"
            rel="noreferrer"
            className="highlight"
          >
            Slice.so
          </a>{" "}
          to learn more.
        </p>
      </>
    ),
    id: "slice"
  },
  {
    question: "How can MTE projects earn money?",
    answer: (
      <>
        <p>
          Each Merge to earn project is linked to a separate slicer. Any ETH or
          accepted currency sent to its address is split to its current owners.
        </p>
        <p>Projects can then earn in the following ways:</p>
        <ul>
          <li>Redirecting payments and other income to the slicer address;</li>
          <li>
            Selling products, such as access to the project&apos;s features or
            merchandise, directly on the <b>slicer decentralized store</b>.
          </li>
        </ul>
      </>
    ),
    id: "earn"
  },
  {
    question: "How to check my earnings from MTE projects and withdraw them?",
    answer: (
      <>
        <p>
          You can see the MTE projects you are part of and withdraw your
          earnings on{" "}
          <a
            href="https://slice.so"
            target="_blank"
            rel="noreferrer"
            className="highlight"
          >
            Slice.so
          </a>
          .
        </p>
      </>
    ),
    id: "check"
  },
  {
    question: "How to transfer or sell ownership of a MTE project?",
    answer: (
      <>
        <p>
          By transferring slices related to a MTE project, you&apos;re
          effectively handing over part of its ownership and future earnings.
        </p>
        <p>You can do so in 3 ways:</p>
        <ol>
          <li>
            <Link href="https://slice.so/profile">
              <a>Check your slicers on slice.so</a>
            </Link>{" "}
            and click on <b>transfer</b> for the desired MTE project. From there
            you&apos;ll be able to transfer any amount of slices to one or more
            addresses.
          </li>
          <li>
            Transfer the slices of the desired MTE project directly from your
            ETH wallet. Slices are ERC1155 tokens so they will appear among your
            NFTs.
          </li>
          <li>
            Sell your slices on any NFT marketplace that support ERC1155s, like{" "}
            <a
              href="https://opensea.io/collection/slice-so"
              target="_blank"
              rel="noreferrer"
            >
              Opensea
            </a>
            .
          </li>
        </ol>
      </>
    ),
    id: "transfer"
  },
  {
    question: "How much does Merge to earn cost?",
    answer: (
      <>
        <p>
          Like Slice protocol, Merge to earn is <b>free to use</b>. Users just
          have to pay the transaction fees to interact with the blockchain.
        </p>
        <p>
          Whenever a slicer owner withdraws earnings from a slicer, a{" "}
          <b>2.5% membership fee</b> is sent to Slice DAO to fund the
          development and maintainment of the protocol. In exchange,{" "}
          <b>owners receive SLX governance tokens</b> which effectively
          represent a stake of ownership in the DAO (and in the future will be
          usable as currency in the protocol).
        </p>
        <p>
          Over time this will result in the Slice protocol being{" "}
          <b>owned and governed by its own users</b>.
        </p>
      </>
    ),
    id: "pricing"
  }
]
