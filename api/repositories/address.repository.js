import prisma from "../prisma/prisma.js"

export const addAddress = async (data) => {
    const address = await prisma.addresses.create({
        data: data
    })
    return address;
}