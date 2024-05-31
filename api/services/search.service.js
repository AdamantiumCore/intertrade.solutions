import { Conflict } from "../errors/Conflict.js";
import * as searchRepository from "../repositories/search.repository.js";
import { UnexpectedError } from "../errors/UnexpectedError.js";
export const search = async (req, res, next) => {
    var { query } = req.body;
    if(query < 3){
        return next(Conflict.invalidQuery());
    }
    query = query.toString();
    var searchedData;
    try{
        searchedData = await searchRepository.search(query);
        console.log(searchedData);
    }
    catch{
        return next(new UnexpectedError());
    }
    res.status(200).json({data: searchedData});
}