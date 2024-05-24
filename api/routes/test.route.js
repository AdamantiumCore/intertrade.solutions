import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();
//example for protected route when add "verifyToken" middlewear
router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn)
router.get("/should-be-admin", shouldBeAdmin)

export default router;
