import bcrypt from "bcrypt";
import prisma from "../prisma/prisma.js";
import jwt from "jsonwebtoken";
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
export const login = async (req, res) => {
  //db operations
  const { username, password } = req.body;

  try{

    const user = await prisma.users.findUnique({
      where: {username}
    })

    if(!user){
      return res.status(401).json({message: "Invalid Credentials!"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
      return res.status(401).json({message: "Invalid Credentials!"});
    }
    //generate cookie token

    const age = 1000 * 60 * 60 * 24 * 7; // expires after 7 days

    const token = jwt.sign({
      id: user.id,
      isAdmin: false, //when we add user authentication
    }, process.env.JWT_SECRET_KEY, //create variable
    { expiresIn: age })
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: age,
      // secure: true, IN PRODUCTION MODE FOR SURE
    }).status(200).json({message: "Login Successful!"})
  }
  catch(err){
    return res.status(500).json({message: "Failed to login!"});
  }
  //check if the user exists
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message: "logout Successful!"})
};
