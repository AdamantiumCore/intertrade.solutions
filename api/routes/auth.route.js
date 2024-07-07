import express from "express";
import {login, logout, register} from "../controllers/auth.controller.js";
import {withValidationHandler} from "./validation/withValidationHandler.js";
import {loginValidation, registerValidation} from "./validation/auth.validation.js";
import { globalErrorCatcher } from "../middleware/globalErrorCatcher.js";

const router = express.Router();

router.post("/register", ...registerValidation, withValidationHandler(register))
router.post("/login", ...loginValidation, withValidationHandler(login))
router.post("/logout", globalErrorCatcher(logout))

export default router;