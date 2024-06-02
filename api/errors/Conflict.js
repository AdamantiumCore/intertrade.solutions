import {ApplicationError} from "./ApplicationError.js";

export class Conflict extends ApplicationError {
  static TYPE_USERNAME_ALREADY_EXISTS = 'api/username-already-exists';
  static TYPE_EMAIL_ALREADY_EXISTS = 'api/email-already-exists';
  constructor(message, type) {
    super(message, type);
  }

  static usernameAlreadyExists() {
    return new Conflict("This username already exists!", this.TYPE_USERNAME_ALREADY_EXISTS);
  }
  static emailAlreadyExists() {
    return new Conflict("This email already exists!", this.TYPE_EMAIL_ALREADY_EXISTS);
  }
}