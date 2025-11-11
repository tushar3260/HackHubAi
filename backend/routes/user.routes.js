import { register, login } from "../cantrollers/user.controller.js";
import express from "express";
import { protect } from "../middlewares/Auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;