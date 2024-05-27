import * as userService from "../services/user.service.js";
export const getUsers = async (req, res, next) => {
    await userService.getUsers(res, next);
}
export const getUser = async (req, res, next) => {

}
export const updateUser = async (req, res, next) => {

}
export const deleteUser = async (req, res, next) => {

}