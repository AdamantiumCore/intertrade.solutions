import * as userService from "../services/user.service.js";

export const register = async (req, res, next) => {
  await userService.register(req, res, next);
  return res.status(200).json({message: "Register Successful!"});
};

export const login = async (req, res, next) => {
  const token = await userService.login(req, res, next);
  return res.cookie("token", token, {httpOnly: true}).status(200)
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message: "logout Successful!"})
};
