import {matchedData, validationResult} from "express-validator";
import {Validation} from "../../errors/validation.js";
export const withValidationHandler = (handler) => async (req, res, next) => {
  const result = validationResult(req);
  try {
    result.throw()
  } catch (e) {
    return next(new Validation(e))
  }

  req.body = {
    ...matchedData(req)
  }
  return await handler(req, res, next)?.catch(next);
}