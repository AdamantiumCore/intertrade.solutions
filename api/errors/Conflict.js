import {ApplicationError} from "./ApplicationError.js";

export class Conflict extends ApplicationError {
  static TYPE_USERNAME_ALREADY_EXISTS = 'api/username-already-exists';
  static TYPE_EMAIL_ALREADY_EXISTS = 'api/email-already-exists';

  constructor(message, type) {
    super(message, type);
  }

  static usernameAlreadyExists() {
    return new Conflict("This username already exists!", Conflict.TYPE_USERNAME_ALREADY_EXISTS);
  }

  static emailAlreadyExists() {
    return new Conflict("This email already exists!", Conflict.TYPE_EMAIL_ALREADY_EXISTS);
  }
  static invalidUser() {
    return new Conflict("Invalid user!");
  }
  static incorrectUser() {
    return new Conflict("Incorrect user!");
  }
}