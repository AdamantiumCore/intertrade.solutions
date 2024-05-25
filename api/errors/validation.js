export class Validation extends Error {
    constructor(e) {
      super()
      this.e = e
    }
}