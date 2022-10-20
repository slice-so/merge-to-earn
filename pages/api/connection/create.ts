import prisma from "@lib/prisma"
import fetcher from "@utils/fetcher"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, repoId, slicerId, safeAddress } = req.body

  try {
    const Authorization = "Bearer " + token
    const body = {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization
      },
      method: "GET"
    }
    const repoData = await fetcher(
      "https://api.github.com/user/installations",
      body
    )

    if (
      repoData?.installations?.findIndex(
        (el: any) => el.id == Number(repoId)
      ) == -1
    ) {
      throw Error("You don't own this repo")
    }

    const connectionData = await prisma.connection.create({
      data: {
        repoId: Number(repoId),
        slicerId: Number(slicerId),
        safeAddress
      }
    })

    res.status(200).json(connectionData)
  } catch (error) {
    res.status(500).json(error)
  }
}

export default handler
