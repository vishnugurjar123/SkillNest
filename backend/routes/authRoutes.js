import express from 'express'
const userrouter = express.Router();
import { register, login } from "../controllers/authController.js";

userrouter.post("/register", register);
userrouter.post("/login", login);

export default userrouter;
