import prisma from "../prisma/prisma.js"

export const addAddress = async (data) => {
    const address = await prisma.addresses.create({
        data: data
    })
    return address;
}
export const getAddressIdByName = async (addressName) => {
    const address = await prisma.addresses.findFirst({
        where: {address: addressName},
        select: {
            id: true
        }
    })
    return address?.id;
}