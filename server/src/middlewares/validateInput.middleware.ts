import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

function validateInputMiddleware(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ body: req.body, query: req.query, params: req.params });
      next();
    } catch (error: any) {
      return res.status(400).json({ message: JSON.parse(error)[0].message });
    }
  };
}

export default validateInputMiddleware;
