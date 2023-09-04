const User = require('../models/user');
const bcrypt = require('bcrypt');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const blacklist = require('../middlewares/checkToken').blacklist; // Import the blacklist


const register = async(req, res) => {
    const user = await User.create({...req.body});
    res.status(StatusCodes.CREATED).json({user});
}

const login = async (req, res) => {
    const {username, password} = req.body
    
    if (!username || !password) {
        throw new Error('Please create an account');
    }
    const user = await User.findOne({username});
    if (!user) {
        throw new Error('Please create an account first');
    }
    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
        throw new Error('Invalid Credentials');
    }
    const token = jwt.sign(
        {userId: user._id, username: user.username},
        process.env.SECRETE,
        {expiresIn: process.env.EXPIRES_IN})


    res.status(StatusCodes.OK).json({user, token});
}

function logoutController(req, res) {
    const token = req.headers.authorization.split(' ')[1];
    blacklist.add(token);
    res.json({ message: 'Logged out successfully' });
  }
  

module.exports = {
    register,
    login,
    logoutController
}
