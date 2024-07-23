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
export const getAllStores = async () => { //list
  return await prisma.stores.findMany();
}
export const createStore = async (data) => { //create
  return await prisma.stores.create({
    data
  })
}
export const editStoreById = async (id, newStore) => { //edit
  return await prisma.stores.update({
    where: {id},
    data: newStore
  })
}
export const deleteStoreById = async (id) => { //delete
  await prisma.stores.delete({
    where: {id}
  })
}