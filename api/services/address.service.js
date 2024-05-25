import * as addressRepository from "../repositories/address.repository.js";
export const addAddress = (data) => {
    const address = addressRepository.addAddress(data);
    return address;
}