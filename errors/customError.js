class CustomApiError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.statuscode = statuscode;
        
    }
}

const createCustomError = (msg, statuscode) => {
    return new CustomApiError(message, statuscode)
}

module.exports = {
    CustomApiError, 
    createCustomError
}
