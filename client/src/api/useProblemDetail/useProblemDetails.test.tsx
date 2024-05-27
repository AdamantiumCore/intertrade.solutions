import useProblemDetails from "./useProblemDetail.ts";
import {renderHook} from "@testing-library/react";
import {createAxiosError} from "../../__test-utilities__";
import {Problem} from "./Problem.ts";

describe('useProblemDetails', () => {

  describe("parseError", () => {
    it('should return undefined for non Problem Detail Type', () => {
      const { result } = renderHook(useProblemDetails)
      const parseError = result.current.parseError('error');
      expect(parseError).toBe(undefined)
    })

    it('should return Problem Detail Type', () => {
      const { result } = renderHook(useProblemDetails)

      const axiosError = createAxiosError({
        data: {
          type: 'type',
          title: 'title',
          detail: 'detail',
          status: 400,
        },
        status: 400,
        headers: { 'content-type': 'application/problem+json' }
      });

      const parseError = result.current.parseError(axiosError);
      expect(parseError).toEqual({
        type: 'type',
        title: 'title',
        detail: 'detail',
        status: 400,
      })
    })

    it('should return Problem Detail Type with violations', () => {
      const { result } = renderHook(useProblemDetails)

      const axiosError = createAxiosError({
        data: {
          type: 'type',
          title: 'title',
          detail: 'detail',
          status: 400,
          violations: [
            {
              property: 'property',
              type: 'type'
            }
          ]
        },
        status: 400,
        headers: { 'content-type': 'application/problem+json' }
      });

      const parseError = result.current.parseError(axiosError);
      expect(parseError).toEqual({
        type: 'type',
        title: 'title',
        detail: 'detail',
        status: 400,
        violations: [
          {
            property: 'property',
            type: 'type'
          }
        ]
      })
    })
  })

  describe("isKnownProblem", () => {
    it('should return false for non Problem Detail Type', () => {
      const { result } = renderHook(useProblemDetails)
      const parseError = result.current.isKnownProblem('error');
      expect(parseError).toBe(false)
    })

    it.each(Object.values(Problem))('should return true for known Problem Detail [%s]', (problem) => {
      const { result } = renderHook(useProblemDetails)

      const axiosError = createAxiosError({
        data: {
          type: problem,
          title: 'title',
          detail: 'detail',
          status: 400,
        },
        status: 400,
        headers: { 'content-type': 'application/problem+json' }
      });

      const parseError = result.current.isKnownProblem(axiosError);
      expect(parseError).toBe(true)
    })

    it('should false for unknown problem details', () => {
      const { result } = renderHook(useProblemDetails)

      const axiosError = createAxiosError({
        data: {
          type: 'api/internal-server-error',
          title: 'title',
          detail: 'detail',
          status: 400,
        },
        status: 400,
        headers: { 'content-type': 'application/problem+json' }
      });

      const parseError = result.current.isKnownProblem(axiosError);
      expect(parseError).toBe(false)
    });
  })
})