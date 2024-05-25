import {body} from "express-validator";
import {NOT_EMPTY} from "./contants.js";

export const loginValidation = [
  body("username", NOT_EMPTY).trim().not().isEmpty(),
  body("password", NOT_EMPTY).trim().not().isEmpty()
]