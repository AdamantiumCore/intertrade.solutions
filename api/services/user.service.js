import { Conflict } from "../errors/Conflict.js";
import { UnexpectedError } from "../errors/UnexpectedError.js";
import { hashPassword } from "../utilities/password-utils.js";
import * as userRepository from "../repositories/user.repository.js"
import * as addressService from "../services/address.service.js";
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
        var hashedPassword = password;
        if(user.password !== password){
            hashedPassword = await hashPassword(password, 10);
        }
        
        const addressId = await addressService.getAddressIdByName(address);
        const userData = {
            firstName,
            lastName,
            middle: middleName,
            avatar,
            addressID: addressId,
            phone,
            email,
            username,
            password: hashedPassword,
          };
        //TODO update address information before updating the user!!!
        updatedUser = await userRepository.updateUser(userData, userId);
    }
    catch{
        return next(new UnexpectedError());
    }
    
    res.status(200).json(updatedUser);
}
export const deleteUser = async (req, res, next) => {
    
}