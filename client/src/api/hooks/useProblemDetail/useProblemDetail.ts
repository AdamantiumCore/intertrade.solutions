import {AxiosError} from "axios";
import {useCallback} from "react";
import {ProblemDetail} from "@/api/hooks/useProblemDetail/types";
import {Problem} from "@/api/hooks/useProblemDetail/Problem";

const isAxiosError = (error: unknown): error is AxiosError => {
  return error != null && typeof error === 'object' && 'isAxiosError' in error
}

const useProblemDetails = () => {

  const parseError = useCallback(
    (error: unknown): ProblemDetail | undefined => {
      if (isAxiosError(error)) {
        const contentTypeHeaders = error?.response?.headers['content-type'];
        if (contentTypeHeaders?.includes('application/problem+json')) {
          return error.response?.data as ProblemDetail;
        }
      }
      return undefined;
    },
    []
  );

  const isKnownProblem = useCallback(
    (error: unknown): boolean => {
      const problemResponse = parseError(error);
      return Object.values(Problem).includes(problemResponse?.type as Problem);
    },
    [parseError]
  );

  return {
    parseError,
    isKnownProblem
  }
}

export default useProblemDetails