import {body} from "express-validator";
import {NOT_EMPTY} from "./contants.js";
export const searchValidation = [
    body("query", NOT_EMPTY,).trim().not().isEmpty().isLength(4),
]