
function sendDevError(err, req, res) {

    if(req.originalUrl.startsWith('/api')) {
       return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            stack: err.stack
        })
    }

    console.log('Outsite')
    res.status(err.statusCode).json({
        status: err.status,
        title: "Internal Server Error",
        message: err.message 
    })
}

const globalErrorController = (err, req, res, next) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV === 'development') {
        sendDevError(err, req, res);
    }

}

export default globalErrorController;