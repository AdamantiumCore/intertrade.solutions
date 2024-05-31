import * as searchService from "../services/search.service.js";
export const search = async (req, res, next) => {
    await searchService.search(req, res, next);
}