import { Router } from "express";

import authRouter from "./authRoutes";

const router: Router = Router();

// /api
router.use("/auth", authRouter);

export default router;