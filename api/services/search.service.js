import * as productRepository from "../repositories/product.repository.js";
import * as storeRepository from "../repositories/store.repository.js";
import { UnprocessableContent } from "../errors/UnprocessableContent.js";
export const getProductsAndStores = async (req, res, next) => {
    var { query } = req.body;
    query = query.toString();
    const stores = await storeRepository.getStoresByQuery(query);
    const products = await productRepository.getProductsByQuery(query);
    const searchedData = {stores, products};
    res.status(200).json(searchedData);
}
export const getSearchQueryDetails = async (req, res, next) => {
    const searchId = req.params.id;
    const store = await storeRepository.getStoreById(searchId);
    if(store !== null){
        return res.status(200).json(store)
    }
    const product = await productRepository.getProductById(searchId);
    if(product == null){
        return next(UnprocessableContent.invalidUser());
    }
    res.status(200).json(product);
}