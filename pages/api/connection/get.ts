import prisma from "@lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { repoId } = req.query

  try {
    const data = await prisma.connection.findFirst({
      where: {
        repoId: Number(repoId)
      }
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export default handler
