import express from "express";
import {login, logout, register} from "../controllers/auth.controller.js";
import {withValidationHandler} from "./validation/withValidationHandler.js";
import {loginValidation} from "./validation/auth.validation.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", ...loginValidation, withValidationHandler(login))
router.post("/logout", logout)

export default router;