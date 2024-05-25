import * as userRepository from "../repositories/user.repository.js";
import * as addressService from "../services/address.service.js";
import { comparePassword } from "../utilities/password-utils.js";
import { generateToken } from "../utilities/jwt-utils.js";
import { Unauthorized } from "../errors/Unauthorized.js";
import { hashPassword } from "../utilities/password-utils.js";
import { Exists } from "../errors/Exists.js";

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await userRepository.findUserByUsername(username);

  if (!user) {
    return next(new Unauthorized("Invalid Credentials"));
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    return next(new Unauthorized("Invalid Credentials"));
  }

  return await generateToken({ sub: user.id });
};

export const register = async (req, res, next) => {
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

  const isUserEmailAlreadyExist = await userRepository.findUserByEmail(email);
  const isUserUsernameAlreadyExist = await userRepository.findUserByUsername(
    username
  );
  const addressData = {
    address,
    city,
    country,
    state_province,
    zipcode,
  };

  
  if (isUserEmailAlreadyExist) {
    if (isUserUsernameAlreadyExist) {
      return next(new Exists("This username and email already exists!"));
    }
    return next(new Exists("This email already exists!"));
  }
  if (isUserUsernameAlreadyExist) {
    return next(new Exists("This username already exists!"));
  }
  const hashedPassword = await hashPassword(password, 10);
  const newAddress = await addressService.addAddress(addressData);
  const userData = {
      firstName,
      lastName,
      middle: middleName,
      avatar,
      addressID: newAddress.id,
      phone,
      email,
      username,
      password: hashedPassword,
    };
  await userRepository.addUser(userData);
};
