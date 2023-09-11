const jwt = require('jsonwebtoken');
require('dotenv').config;
const {isTokenBlacklisted} = require('../utils/blacklisted');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error("No valid token")
    }

    const theToken = authHeader.split(' ')[2];
    
    if (isTokenBlacklisted(theToken)) {
        res.status(401).json({error: 'Unauthorised'});
    }
    
    try {
        
        const decodedToken = jwt.verify(theToken, process.env.SECRETE);
        console.log('decoded token');
        const {userId, username} = decodedToken
        req.user = {userId, username}
        next()
    } catch (error) {
        throw new Error('Not authorised')
    }
}

module.exports = authenticationMiddleware;
