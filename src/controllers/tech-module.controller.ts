import { Request, Response, NextFunction } from "express";
import * as techModuleService from "../services/tech-module.service";
import { successResponse, errorResponse } from "../utils/response.util";
import { createTechModuleSchema } from "../schemas/tech-module.schema";

export async function getAllTechModules(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const search: string = (req.query.search as string) || "";
    const techModules = await techModuleService.getAllTechModules(search);
    if (techModules) {
      return successResponse(res, {
        message: "Tech modules retrieved successfully",
        techModules,
      });
    }
  } catch (error: any) {
    next(error);
  }
}

export async function createTechModules(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, code } = req.body;
    const slugName = name.toLowerCase().replace(/[- ]+/g, "-");

    const body = { name, slugName, code };
    const data = createTechModuleSchema.parse(body);

    const techModuleExists = await techModuleService.isTechModuleExists(
      slugName
    );
    if (techModuleExists) {
      return errorResponse(res, "Tech module already exists", 403);
    }

    const techModule = await techModuleService.createTechModules(
      data,
      req.userId!
    );
    if (techModule) {
      return successResponse(res, {
        message: "Tech module created successfully",
        techModule,
      });
    }
  } catch (error: any) {
    next(error);
  }
}
