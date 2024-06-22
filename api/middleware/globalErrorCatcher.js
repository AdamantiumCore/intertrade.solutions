export const globalErrorCatcher = (handler) => async (req, res, next) => {
    return await handler(req, res, next)?.catch(next);       
}