import bcrypt from "bcrypt";
import prisma from "../prisma/prisma.js";
import {login as userLogin} from "../services/user.service.js";

export const register = async (req, res) => {
  //db operations
  const {
    firstName,
    lastName,
    middleName,
    avatar,
    address,
    city,
    country,
    state_province,
    zipcode,
    phone,
    email,
    username,
    password,
  } = req.body;
  //hash the password
  const isEmailAlreadyExist = await prisma.users.findUnique({
    where: {email}
  })
  const isUsernameAlreadyExist = await prisma.users.findUnique({
    where: {username}
  })
  if(isEmailAlreadyExist){
    if(isUsernameAlreadyExist){
        return res.status(409).json({message: "This username and email already exists!"});
    }
    return res.status(409).json({message: "This email already exist!"});
  }
  if(isUsernameAlreadyExist){
    return res.status(409).json({message: "This username already exist!"});
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  //create a new user and save to DB
  const newAddress = await prisma.addresses.create({
    data: {
      address,
      city,
      country,
      state_province,
      zipcode,
    },
  });
    await prisma.users.create({
    data: {
      firstName,
      lastName,
      middle: middleName,
      avatar,
      addressID: newAddress.id,
      phone,
      email,
      username,
      password: hashedPassword,
    },
  });
  res.status(200).json({message: "Register Successful!"});
};

export const login = async (req, res, next) => {
  const token = await userLogin(req, res, next);
  return res.cookie("token", token, {httpOnly: true}).status(200)
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message: "logout Successful!"})
};
