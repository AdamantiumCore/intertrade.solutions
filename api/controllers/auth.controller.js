import * as authService from "../services/auth.service.js";

export const register = async (req, res, next) => {
  return await authService.register(req, res, next);
};

export const login = async (req, res, next) => {
  return await authService.login(req, res, next);
};

export const logout = (req, res) => {
  console.log("Colliiee")
  res.clearCookie("token", {path:'/'}).status(200).json({message: "Successful Logout"});
};
