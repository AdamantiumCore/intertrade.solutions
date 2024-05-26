import * as userService from "../services/user.service.js";

export const register = async (req, res, next) => {
  return await userService.register(req, res, next);
};

export const login = async (req, res, next) => {
  return await userService.login(req, res, next);
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200)
};
