const jwt = require('jsonwebtoken');
require('dotenv').config

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error("No valid token")
    }

    const theToken = authHeader.split(' ')[2];
    try {
        
        const decodedToken = jwt.verify(theToken, process.env.SECRETE);
        console.log(decodedToken)
        const {id, username} = decodedToken
        req.user = {id, username}
        next()
    } catch (error) {
        throw new Error('Not authorised')
    }
}

module.exports = authenticationMiddleware;
