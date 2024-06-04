import { InvalidData } from "../errors/InvalidData.js";
import * as searchRepository from "../repositories/search.repository.js";
export const getProductsAndStores = async (req, res, next) => {
    var { query } = req.body;
    if(query.length < 3){
        return next(InvalidData.invalidQuery());
    }
    query = query.toString();
    const searchedData = await searchRepository.getProductsAndStores(query);
    res.status(200).json(searchedData);
}
export const getSearchQueryDetails = async (req, res, next) => {
    const searchId = req.params.id;
    const searchDetails = await searchRepository.getSearchQueryDetails(searchId);
    res.status(200).json(searchDetails)
}