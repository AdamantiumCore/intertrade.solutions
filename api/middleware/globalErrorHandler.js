import {ProblemDetails, Violation} from "../types/problemDetails.js";
import {Validation} from "../errors/validation.js";
import {Unauthorized} from "../errors/Unauthorized.js";
import {Conflict} from "../errors/Conflict.js";
import { UnprocessableContent } from "../errors/UnprocessableContent.js";

export const globalErrorHandler = () => {
  return (err, req, res, _next) => {
    console.log('Error caught in global error handler', err)

    if (err instanceof Validation) {
      return buildErrorResponse(res, validationErrorHandler(err))
    }

    if (err instanceof Unauthorized) {
      return buildErrorResponse(res, new ProblemDetails({
        type: 'api/sign-in-unauthorized',
        title: 'Unauthorized',
        status: 401,
        detail: err.message
      }));
    }

    if (err instanceof Conflict) {
      return buildErrorResponse(res, new ProblemDetails({
        type: err.type,
        title: 'Conflict',
        status: 409,
        detail: err.message
      }));
    }
    
    if (err instanceof UnprocessableContent) {
      return buildErrorResponse(res, new ProblemDetails({
        type: err.type,
        title: 'InvalidData',
        status: 422,
        detail: err.message
      }));
    }
    return buildErrorResponse(res, new ProblemDetails({
      type: 'api/internal-server-error',
      title: 'Internal Server Error',
      detail: 'Something broke!',
      status: 500
    }))
  }
}

const validationErrorHandler = (error) => {
  const violations = error.e.array()
    .filter(error => error.type === 'field')
    .map(error => new Violation({
      property: error.path,
      type: error.msg
    }))

  return new ProblemDetails({
    type: 'api/bad-request',
    title: 'Bad Request',
    detail: 'Request failed validations',
    status: 400,
    violations
  })
}

const buildErrorResponse = (res, problemDetails) => {
  return res.set('Content-Type', 'application/problem+json')
    .status(problemDetails.status)
    .json(problemDetails)
}