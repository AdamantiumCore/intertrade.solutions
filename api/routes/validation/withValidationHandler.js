import {matchedData, validationResult} from "express-validator";
import {ProblemDetails, Violation} from "../../types/problemDetails.js";

export const withValidationHandler = (handler) => async (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    req.body = {
      ...matchedData(req)
    }
    return handler(req, res, next);
  }

  const violations = result.array()
    .filter(error => error.type === 'field')
    .map(error => new Violation({
      property: error.path,
      type: error.msg
    }))

  const problemDetails = new ProblemDetails({
    type: 'api/bad-request',
    title: 'Bad Request',
    detail: 'Request failed validations',
    status: 400,
    violations
  })

  return res.status(400).json(problemDetails)
}