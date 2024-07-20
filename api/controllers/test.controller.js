import jwt from "jsonwebtoken";
import * as productsRepository from "../repositories/product.repository.js";
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
export const allProducts = async (req, res) => {
    const data = {name: "Bear2", price: 55.00, storeId: "c8711ec3-b497-4ed1-8269-9e046ff0399e"}
    await productsRepository.editProductById("5c36a1a4-9765-49b4-afe1-151adae8d759", data)
    console.log(await productsRepository.getAllProducts())
}