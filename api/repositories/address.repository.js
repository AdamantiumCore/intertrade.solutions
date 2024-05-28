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
export const getAddressById = async (addressId) => {
    return await prisma.addresses.findFirst({
        where: {id: addressId}
    })
}
export const updateAddress = async (addressData, addressId) => {
    await prisma.addresses.update({
        where: {id: addressId},
        data: addressData,
    })
}
export const deleteAddress = async (addresId) => {
    await prisma.addresses.delete({
        where: {id: addresId}
    })
}