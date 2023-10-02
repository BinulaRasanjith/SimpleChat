import { Router } from "express";

import { signup, login, logout, checkUsername } from "../controllers/auth-controllers";

const authRouter = Router();

// /api/auth
authRouter.get("/check-username/:username", checkUsername);
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;