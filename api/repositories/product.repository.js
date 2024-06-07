import prisma from "../prisma/prisma.js";
export const getProductsByQuery = async (query) => {
    return await prisma.products.findMany({
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
export const getProductById = async (id) => {
  return await prisma.products.findUnique({
    where: {id},
    include: {
      categories: true,
      comments: true,
      orders: true,
      product_discounts: true,
      product_images: true,
      ratings: true,
      store: true,
      wishlists: true,
    }
  })
}