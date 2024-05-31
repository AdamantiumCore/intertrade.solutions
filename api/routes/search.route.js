import express from "express";
import { search } from "../controllers/search.controller.js";
import { withValidationHandler } from "./validation/withValidationHandler.js";
import { searchValidation } from "./validation/search.validation.js";
const router = express.Router();

router.post("/getData", ...searchValidation, withValidationHandler(search))
export default router;