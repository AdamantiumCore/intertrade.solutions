import express from "express";
import { getProductsAndStores, getSearchQueryDetails } from "../controllers/search.controller.js";
import { withValidationHandler } from "./validation/withValidationHandler.js";
import { searchValidation } from "./validation/search.validation.js";
const router = express.Router();

router.post("/getData", ...searchValidation, withValidationHandler(getProductsAndStores))
router.get("/getSearchDetails/:id", withValidationHandler(getSearchQueryDetails))
export default router;