import prisma from "../prisma/prisma.js";
export const getProductsAndStores = async (query) => {
    
    return {stores, products};
}
export const getSearchQueryDetails = async (id) => {
  const store = await prisma.stores.findUnique({
    where: {id},
    include: {
      address: true,
      products: true,
      comments: true,
      ratings: true,
    }
  })
  if(store !== null){
    return store;
  }
  const product = await prisma.products.findUnique({
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
  return product;
}