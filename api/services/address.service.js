import * as addressRepository from "../repositories/address.repository.js";
export const addAddress = async (data) => {
    return await addressRepository.addAddress(data);
}
export const getAddressIdByName = async (addressName) => {
    return await addressRepository.getAddressIdByName(addressName);
}
export const getAddressById = async (addressId) => {
    return await addressRepository.getAddressById(addressId);
}
export const updateAddress = async (addressData, addressId) => {
    return await addressRepository.updateAddress(addressData, addressId);
}