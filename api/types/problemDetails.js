export class ProblemDetails {
  constructor(props) {
    this.type = props.type;
    this.title = props.title;
    this.detail = props.detail;
    this.status = props.status;
    this.violations = props.violations;
  }
}

export class Violation {
  constructor(props) {
    this.property = props.property;
    this.type = props.type;
  }
}