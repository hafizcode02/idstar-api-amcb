import express from "express";
import * as techModuleController from "../controllers/tech-module.controller";
import { authMiddleware } from '../middlewares/auth.middleware';

const router = express.Router();
router.use(authMiddleware as any);

router.get("/", techModuleController.getAllTechModules);

export default router;
