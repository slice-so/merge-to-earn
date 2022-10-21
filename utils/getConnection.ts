import prisma from "@lib/prisma"

const getConnection = async (repoId: number | string) => {
  const data = await prisma.connection.findFirst({
    where: {
      repoId: Number(repoId)
    }
  })

  return data
}

export default getConnection
