import {body} from "express-validator";
import {NOT_EMPTY} from "./contants.js";

export const loginValidation = [
  body("username", NOT_EMPTY).trim().not().isEmpty(),
  body("password", NOT_EMPTY).trim().not().isEmpty()
]
export const registerValidation = [
  body("firstName", NOT_EMPTY).trim().not().isEmpty(),
  body("lastName", NOT_EMPTY).trim().not().isEmpty(),
  body("middleName", NOT_EMPTY).trim().not().isEmpty(),
  body("avatar", NOT_EMPTY).trim().not().isEmpty(),
  body("address", NOT_EMPTY).trim().not().isEmpty(),
  body("city", NOT_EMPTY).trim().not().isEmpty(),
  body("country", NOT_EMPTY).trim().not().isEmpty(),
  body("state_province", NOT_EMPTY).trim().not().isEmpty(),
  body("zipcode", NOT_EMPTY).trim().not().isEmpty(),
  body("phone", NOT_EMPTY).trim().not().isEmpty(),
  body("email", NOT_EMPTY).trim().not().isEmpty(),
  body("username", NOT_EMPTY).trim().not().isEmpty(),
  body("password", NOT_EMPTY).trim().not().isEmpty(),
]