import express from "express";
import { getUser, getUsers, updateUser, deleteUser, verifyEmail, forgotPassword } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { globalErrorCatcher } from "../middleware/globalErrorCatcher.js";
const router = express.Router();

router.get("/", globalErrorCatcher(getUsers));
router.get("/:id", verifyToken, globalErrorCatcher(getUser));
router.put("/:id", verifyToken, globalErrorCatcher(updateUser));
router.delete("/:id", verifyToken, globalErrorCatcher(deleteUser));
router.post("/:id", verifyEmail); //we should add globalTryCatcher Also I (Gogi) think we DON'T NEED THIS ROUTE
router.post("/forgotPassword", forgotPassword); //we should add globalTryCatcher

export default router;