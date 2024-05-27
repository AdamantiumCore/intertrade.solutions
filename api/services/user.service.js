import { Conflict } from "../errors/Conflict.js";
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
export const getUser = async (req, res, next) => {
    const userId = req.params.id;
    var user = null;
    try{
        user = await userRepository.findUserById(userId);
        if(user == null){
            return next(Conflict.invalidUser());
        }
    }
    catch{
        return next(new UnexpectedError());
    }
    res.status(200).json(user);
}
export const updateUser = async (req, res, next) => {
    const userId = req.params.id;
    
    
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
      const userForUpdate = {firstName, lastName, middleName, avatar, address, city, country, state_province, zipcode,phone, email, username, password};
    var updatedUser = null;
    try{
        const user = await userRepository.findUserById(userId);
        if(!user){
            return next(Conflict.invalidUser());
        }
        if(user.username !== username || user.email !== email){

        const isUserEmailAlreadyExist = await userRepository.findUserByEmail(email);
        const isUserUsernameAlreadyExist = await userRepository.findUserByUsername(username);
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
        
        updatedUser = await userRepository.updateUser(userForUpdate, userId);
    }
    catch{
        
    }
    
    res.status(200).json(updatedUser);
}
export const deleteUser = async (req, res, next) => {
    
}