import * as searchService from "../services/search.service.js";
export const getProductsAndStores = async (req, res, next) => {
    await searchService.getProductsAndStores(req, res, next);
}
export const getSearchQueryDetails = async (req, res, next) => {
    await searchService.getSearchQueryDetails(req, res, next);
}