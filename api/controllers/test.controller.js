import jwt from "jsonwebtoken";
import * as storeRepository from "../repositories/store.repository.js"
export const shouldBeLoggedIn = (req, res) => {
    console.log(req.userId);
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Not Authenticated!"})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err){
            return res.status(401).json({message: "Token is not Valid!"})
        }
    })

    res.status(200).json({message: "You are Authenticated!"})
}
export const shouldBeAdmin = (req, res) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Not Authenticated!"})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err){
            return res.status(401).json({message: "Token is not Valid!"})
        }
        if(!payload.isAdmin){
            return res.status(403).json({message: "Not authorized!"});
        }
    })

    res.status(200).json({message: "You are Authenticated!"})
}
export const testAllStores = async (req, res) => {  
    const data = {name: "TestNomer2", addressId: "2c866545-5cc5-45ed-8fac-c7b879577a2a", logo: "htpdsf:dfd", description: ""}
    //console.log(await storeRepository.createStore(data));
    console.log(await storeRepository.editStoreById("c8711ec3-b497-4ed1-8269-9e046ff0399e", data))
    // console.log(await storeRepository.editStoreById(data));
    console.log(await storeRepository.getAllStores());
}