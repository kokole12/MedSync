const User = require('../models/user');
const bctypt = require('bcryptjs');
const {StatusCodes} = require('http-status-codes');

const register = async(req, res) => {
    const {email, username, passord, role} = req.body
    const salt = bctypt.genSalt(10);
    const hashedPassword = await bctypt.hash(passord, salt);

    const tempUser = {email, username, passord: hashedPassword, role};
    const user = await User.create({...tempUser});
    res.status(StatusCodes.CREATED).json({user});
}

const login = async(req, res) => {
    res.send('login route');
}


module.exports = {
    register,
    login
}
