const User = require('../models/user');
const bcrypt = require('bcrypt');
const {StatusCodes} = require('http-status-codes');

const register = async(req, res) => {
    const user = await User.create({...req.body});
    res.status(StatusCodes.CREATED).json({user});
}

const login = async (req, res) => {
    const {username, password} = req.body
    
    if (!username || !password) {
        throw new Error('Please create an account');
    }
    const user = await User.findOne(username);
    if (!user) {
        throw new Error('Please create an account first');
    }
    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
        throw new Error('Invalid Credentials');
    }
    res.status(StatusCodes.OK).json(user);
}


module.exports = {
    register,
    login
}
