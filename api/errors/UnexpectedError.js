export class UnexpectedError extends Error {
    constructor(message) {
        if(message == ""){
            message = "Unexpected error occurred!";
        }
        super(message);
    }
}