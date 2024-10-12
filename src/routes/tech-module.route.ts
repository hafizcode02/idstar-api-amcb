import express from "express";
import * as techModuleController from "../controllers/tech-module.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", techModuleController.getAllTechModules);
router.post("/", authMiddleware, techModuleController.createTechModules);
router.get("/:id", authMiddleware, techModuleController.getTechModules);
router.put("/:id", authMiddleware, techModuleController.updateTechModules);
router.delete("/:id", authMiddleware, techModuleController.deleteTechModules);

export default router;
