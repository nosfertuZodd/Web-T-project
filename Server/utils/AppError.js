export default class AppError extends Error {
    
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = this.statusCode < 500 ? 'fail' : 'error'

        Error.captureStackTrace(this, this.constructor);
    }
}