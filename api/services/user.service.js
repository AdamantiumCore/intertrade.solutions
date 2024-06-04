import { InvalidData } from "../errors/InvalidData.js";
import { hashPassword } from "../utilities/password-utils.js";
import * as userRepository from "../repositories/user.repository.js";
import * as addressService from "../services/address.service.js";
export const getUsers = async (res, next) => {
  const allUsers = await userRepository.getAllUsers();
  return res.status(200).json({ users: allUsers });
};
export const getUser = async (req, res, next) => {
  const userId = req.params.id;
  const user = await userRepository.findUserById(userId);
  if (user == null) {
    return next(InvalidData.invalidUser());
  }
  res.status(200).json(user);
};
export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const {
    email,
    username,
    password,
    address,
    city,
    country,
    state_province,
    zipcode,
    firstName,
    lastName,
    middleName,
    avatar,
    phone,
  } = req.body;
  const user = await userRepository.findUserById(userId);
  if (!user) {
    return next(InvalidData.invalidUser());
  }
  if (user.username !== username || user.email !== email) {
    const isUserEmailAlreadyExist = await userRepository.findUserByEmail(
      email
    );
    const isUserUsernameAlreadyExist =
      await userRepository.findUserByUsername(username);
    if (isUserEmailAlreadyExist) {
      if (isUserUsernameAlreadyExist) {
        return next(new Conflict("This username and email already exists!"));
      }
      return next(Conflict.emailAlreadyExists());
    }
    if (isUserUsernameAlreadyExist) {
      return next(Conflict.usernameAlreadyExists());
    }
  }
  var hashedPassword = password;
  if (user.password !== password) {
    hashedPassword = await hashPassword(password, 10);
  }

  var addressId = await addressService.getAddressIdByName(address);
  const addressData = {
    address,
    city,
    country,
    state_province,
    zipcode,
  };
  if (!addressId) {
    const newAddress = await addressService.addAddress(addressData);
    addressId = newAddress.id;
  } else {
    const oldAddress = await addressService.getAddressById(addressId);
    //here we prevent database query!
    if (
      oldAddress.address !== address ||
      oldAddress.city !== city ||
      oldAddress.country !== country ||
      oldAddress.state_province !== state_province ||
      oldAddress.zipcode !== zipcode
    ) {
      await addressService.updateAddress(addressData, addressId);
    }
  }
  const userData = {
    firstName,
    lastName,
    middle: middleName,
    avatar,
    addressID: addressId,
    phone,
    email,
    username,
    password: hashedPassword,
  };
  //TODO update address information before updating the user!!!
  const updatedUser = await userRepository.updateUser(userData, userId);
  res.status(200).json(updatedUser);
};
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  const user = await userRepository.findUserById(userId);
  if (!user) {
    return next(InvalidData.invalidUser());
  }
  var addresId = user.addressID;
  if (!addresId) {
    return next(InvalidData.invalidAddress());
  }
  await userRepository.deleteUser(userId);
  await addressService.deleteAddress(addresId);
  res.status(200).json({ message: "Successfully deleted user!" });
};
