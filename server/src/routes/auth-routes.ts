import { Router } from "express";

import { signup, login, logout } from "../controllers/auth-controllers";

const authRouter = Router();

// /api/auth
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;