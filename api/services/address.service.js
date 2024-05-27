import * as addressRepository from "../repositories/address.repository.js";
export const addAddress = async (data) => {
    return await addressRepository.addAddress(data);
}
export const getAddressIdByName = async (addressName) => {
    return await addressRepository.getAddressIdByName(addressName);
}