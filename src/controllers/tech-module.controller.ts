import { Request, Response, NextFunction } from "express";
import * as techModuleService from "../services/tech-module.service";
import { successResponse, errorResponse } from "../utils/response.util";
import {
  createTechModuleSchema,
  updateTechModuleSchema,
} from "../schemas/tech-module.schema";
import { slugNameconverter } from "../utils/converter.util";

export async function getAllTechModules(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const search: string = (req.query.search as string) || "";
    const techModules = await techModuleService.getAllTechModules(search);
    if (techModules) {
      return successResponse(res, "Tech modules retrieved successfully", techModules);
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
    const { name, code, CoderByteModuleName } = req.body;
    const slugName = slugNameconverter(name);

    const body = { name, slugName, code, CoderByteModuleName };
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
      return successResponse(res, "Tech module created successfully", techModule);
    }
  } catch (error: any) {
    next(error);
  }
}

export async function getTechModules(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const techModule = await techModuleService.getTechModules(id);
    if (techModule) {
      return successResponse(res, "Tech module retrieved successfully", techModule);
    }
  } catch (error: any) {
    next(error);
  }
}

export async function updateTechModules(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const { name, code, CoderByteModuleName } = req.body;
    const slugName = slugNameconverter(name);

    const data = updateTechModuleSchema.parse({ name, slugName, code, CoderByteModuleName });

    const techModule = await techModuleService.updateTechModules(id, data);
    if (techModule) {
      return successResponse(
        res,
        "Tech module updated successfully",
        techModule
      );
    }
  } catch (error: any) {
    next(error);
  }
}

export async function deleteTechModules(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const techModule = await techModuleService.deleteTechModules(id);
    if (techModule) {
      return successResponse(res, "Tech module deleted successfully", techModule);
    }
  } catch (error: any) {
    next(error);
  }
}
