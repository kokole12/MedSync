const User = require('../models/user');
const bcrypt = require('bcrypt');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {addToBlacklist} = require('../utils/blacklisted')


const register = async(req, res) => {
    const user = await User.create({...req.body});
    res.status(StatusCodes.CREATED).json({user});
}

const login = async (req, res) => {
    const {username, password} = req.body
    
    if (!username || !password) {
        res.status(404).json({error: 'No credentials provided'});
        return;
    }
    const user = await User.findOne({username});
    if (!user) {
        res.status(404).json({error: 'Not a registered user'});
        return;
    }
    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
        res.status(401).json({error: 'Unauthorised'})
        return;
    }
    const token = jwt.sign(
        {userId: user._id, username: user.username},
        process.env.SECRETE,
        {expiresIn: process.env.EXPIRES_IN})


    res.status(StatusCodes.OK).json({user, token});
}

const logout = async (req, res) => {
    const token = req.headers.authorization.split(' ')[2];
    if (!token) {
        res.status(StatusCodes.BAD_REQUEST).json({Message: 'Already logged out'});
        return;
    };
    await addToBlacklist(token);

    res.status(200).json({Message: 'Logout successful'});
    res.end();
}

module.exports = {
    register,
    login,
    logout
}
