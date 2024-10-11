export class ResponseError extends Error {
  constructor(public status: string, public code: number, message: string) {
    super(message);
  }
}

export function successResponse(res: any, data: any, code = 200) {
  return res.status(code).json({
    status: "success",
    code,
    data
  });
}

export function errorResponse(res: any, message: string, code = 500) {
  return res.status(code).json({
    status: "error",
    code,
    message: message,
  });
}