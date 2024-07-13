import * as productRepository from "../repositories/product.repository.js";
import * as storeRepository from "../repositories/store.repository.js";
import * as openAiService from "../services/openAi.service.js";
export const getProductsAndStores = async (req, res, next) => {
    var { query } = req.body;
    query = query.toString();
    const stores = await storeRepository.getStoresByQuery(query);
    const products = await productRepository.getProductsByQuery(query);
    const searchedData = {stores, products};
    // const response = await openAiService.callAi(searchedData); //OPENAI TESTING
    // console.log(11, response);
    res.status(200).json(searchedData);
}
export const getSearchQueryDetails = async (req, res, next) => {
    const searchId = req.params.id;
    const store = await storeRepository.getStoreById(searchId);
    if(store !== null){
        return res.status(200).json(store)
    }
    const product = await productRepository.getProductById(searchId);
    res.status(200).json(product);
}