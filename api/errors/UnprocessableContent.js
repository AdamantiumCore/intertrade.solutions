export class UnprocessableContent extends Error{
    static TYPE_USER_INVALID = 'api/invalid-user';
    static TYPE_ADDRESS_INVALID = 'api/invalid-address';
    static TYPE_QUERY_INVALID = 'api/invalid-query';
    constructor(message) {
      super(message);
    }
    static invalidUser() {
        return new UnprocessableContent("Invalid user!", this.TYPE_USER_INVALID);
    }
    static invalidAddress() {
        return new UnprocessableContent("Incorrect address!", this.TYPE_ADDRESS_INVALID);
    }
    static invalidQuery() {
        return new UnprocessableContent("Incorrect query!", this.TYPE_QUERY_INVALID)
    }
  }
