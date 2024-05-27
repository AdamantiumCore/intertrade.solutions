import { UnexpectedError } from "../errors/UnexpectedError.js";
import * as userRepository from "../repositories/user.repository.js"
export const getUsers = async (res, next) => {
    var allUsers = null;
    try{
        allUsers = await userRepository.getAllUsers(); 
    }
    catch (ex){
       return next(new UnexpectedError());
    }
    return res.status(200).json({users: allUsers});
}