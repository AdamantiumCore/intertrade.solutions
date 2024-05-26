export class ApplicationError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type;
    }
}