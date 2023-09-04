const express = require('express');
const {login, register, logoutController} = require('../controllers/authentication');
const authenticationMiddleware = require('../middlewares/auth');

const authRouter = express.Router();

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Authentication
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               registrationNumber:
 *                 type: string
 *               hospital:
 *                 type: string
 *               qualifications:
 *                 type: string
 *               affiliations:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                  type: string
 *               role:
 *                  type: string
 *               isverified:
 *                  type: boolean
 *                  default: false
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
authRouter.route('/register').post(register);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Authentication
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
authRouter.route('/login').post(login);

/**
 * @swagger
 * /api/v1/patient:
 *   post:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Authentication
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               gender:
 *                 type: string
 *               birthdate:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
authRouter.route('/logout').post( authenticationMiddleware, logoutController)

module.exports = authRouter;
