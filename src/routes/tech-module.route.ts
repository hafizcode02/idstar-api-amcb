import express from "express";
import * as techModuleController from "../controllers/tech-module.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", techModuleController.getAllTechModules);

router.post("/create", authMiddleware, techModuleController.createTechModules);

export default router;
