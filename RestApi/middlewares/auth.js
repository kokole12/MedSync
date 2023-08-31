const jwt = require('jsonwebtoken');

export const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomApiError("No valid token", 401)
    }

    const theToken = authHeader.split(' ')[1]

    try {
        
        const decodedToken = jwt.verify(theToken, process.env.SECRETE)
        const {id, username} = decodedToken
        req.user = {id, username}
        next()
    } catch (error) {
        throw new Error('No authorised')
    }
}
