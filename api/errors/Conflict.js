import {ApplicationError} from "./ApplicationError.js";

export class Conflict extends ApplicationError {
  static TYPE_USERNAME_ALREADY_EXISTS = 'api/username-already-exists';
  static TYPE_EMAIL_ALREADY_EXISTS = 'api/email-already-exists';
  static TYPE_USER_INVALID = 'api/invalid-user';
  static TYPE_ADDRESS_INVALID = 'api/invalid-address';
  constructor(message, type) {
    super(message, type);
  }

  static usernameAlreadyExists() {
    return new Conflict("This username already exists!", this.TYPE_USERNAME_ALREADY_EXISTS);
  }
  static emailAlreadyExists() {
    return new Conflict("This email already exists!", this.TYPE_EMAIL_ALREADY_EXISTS);
  }
  static invalidUser() {
    return new Conflict("Invalid user!", this.TYPE_USER_INVALID);
  }
  static invalidAddress() {
    return new Conflict("Incorrect address!", this.TYPE_ADDRESS_INVALID);
  }
}