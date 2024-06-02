import { InvalidData } from "../errors/InvalidData.js";
import * as searchRepository from "../repositories/search.repository.js";
import { UnexpectedError } from "../errors/UnexpectedError.js";
export const getProductsAndStores = async (req, res, next) => {
    var { query } = req.body;
    if(query.length < 3){
        return next(InvalidData.invalidQuery());
    }
    query = query.toString();
    var searchedData;
    try{
        searchedData = await searchRepository.getProductsAndStores(query);
        console.log(searchedData);
    }
    catch{
        return next(new UnexpectedError());
    }
    res.status(200).json(searchedData);
}
export const getSearchQueryDetails = async (req, res, next) => {
    const searchId = req.params.id;
    var searchDetails;
    try{
        searchDetails = await searchRepository.getSearchQueryDetails(searchId);
    }
    catch{
        return next(new UnexpectedError());
    }
    res.status(200).json(searchDetails)
}