import { AnySchema } from "yup"
import { Request, Response, NextFunction } from "express";

export const validateRequestService = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const valideBody = await schema.validate(req.body, {
      stripUnknown: true
    });
    req.body = valideBody;

    next();
  } catch(error) {
    res.status(400).send(`Error: ${error.message}`);
  }
}