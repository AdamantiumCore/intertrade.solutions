import * as userRepository from "../repositories/user.repository.js";
import * as addressService from "./address.service.js";
import {comparePassword, hashPassword} from "../utilities/password-utils.js";
import {generateToken} from "../utilities/jwt-utils.js";
import {Unauthorized} from "../errors/Unauthorized.js";
import {Conflict} from "../errors/Conflict.js";

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

  const token = await generateToken({ sub: user.id });
  return res.cookie("token", token, {httpOnly: true}).status(200)
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
    phone
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
      return next(new Conflict("This username and email already exists!"));
    }
    return next(Conflict.emailAlreadyExists());
  }
  if (isUserUsernameAlreadyExist) {
    return next(Conflict.usernameAlreadyExists());
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

  return res.status(201)
};
