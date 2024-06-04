import express from "express";
import { getUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { globalErrorCatcher } from "../middleware/globalErrorCatcher.js";
const router = express.Router();

router.get("/", globalErrorCatcher(getUsers));
router.get("/:id", verifyToken, globalErrorCatcher(getUser));
router.put("/:id", verifyToken, globalErrorCatcher(updateUser));
router.delete("/:id", verifyToken, globalErrorCatcher(deleteUser));

export default router;