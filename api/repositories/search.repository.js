import prisma from "../prisma/prisma.js";
export const search = async (query) => {
    const stores = await prisma.stores.findMany({
        where: {name: {contains: query}, description: {contains:query}}
    })
    console.log(stores);
    const products = await prisma.products.findMany({
        where: {name: {contains: query}, description: {contains: query}}
    })
    const all = {stores, products};
    return all;
}