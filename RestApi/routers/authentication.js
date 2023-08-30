const express = require('express');
const {login, register} = require('../controllers/authentication');

const authRouter = express.Router();

authRouter.route('/register').post(register);
authRouter.route('/login').post(login);

module.exports = authRouter;
