import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";
import { registerSchema, loginSchema } from "../schemas/auth.schema";
import { errorResponse, successResponse } from "../utils/response.util";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password, name } = registerSchema.parse(req.body);

    const checkUserExists = await authService.checkUserExists(req.body.email);
    if (checkUserExists) {
      return errorResponse(res, "User already exists", 403);
    }

    const { user } = await authService.register(email, password, name);
    if (user) {
      return successResponse(res, "User created successfully", user, 201);
    }
  } catch (error: any) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const { user, token } = await authService.login(email, password);
    if (user && token) {
      return successResponse(
        res,
        "User logged in successfully",
        { token },
        200
      );
    }
  } catch (error: any) {
    next(error);
  }
}
