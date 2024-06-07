import prisma from "../prisma/prisma"
export const getStoresByQuery = async (query) => {
    return await prisma.stores.findMany({
        where: {
            OR: [
            {
              name: {
                contains: query,
              },
            },
            { 
              description: { 
                contains: query 
            } 
            },
          ],
        }
    })
}