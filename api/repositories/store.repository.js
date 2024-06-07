import prisma from "../prisma/prisma.js";
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
export const getStoreById = async (id) => {
  return await prisma.stores.findUnique({
    where: {id},
    include: {
      address: true,
      products: true,
      comments: true,
      ratings: true,
    }
  })
}