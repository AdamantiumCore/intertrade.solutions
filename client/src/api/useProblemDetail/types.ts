export interface ProblemDetail {
  type: string
  title: string
  status: number
  detail: string
  violations?: Violation[]
}

export interface Violation {
  property: string
  type: string
}