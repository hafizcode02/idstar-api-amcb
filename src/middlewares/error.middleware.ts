import { ResponseError } from "../utils/response.util";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Validation Error",
      errors: error.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
      })),
    });
  } else if (error instanceof ResponseError) {
    res.status(error.code).json({
      status: error.status,
      code: error.code,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};
