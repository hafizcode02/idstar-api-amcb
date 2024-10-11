import { Request, Response } from "express";
import * as techModuleService from "../services/tech-module.service";

export async function getAllTechModules(req: Request, res: Response) {
  try {
    const techModules = await techModuleService.getTechModules();
    res.json(techModules);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
