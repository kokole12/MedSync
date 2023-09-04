const express = require('express');
const authenticationMiddleware = require('../middlewares/auth');
const {
    getAllPatients,
    createPatient,
    updatePatient,
    getSinglePatient} = require('../controllers/patientConttroller');

const patientRouter = express.Router();

/**
 * @swagger
 * /api/v1/patient:
 *   get:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Patients
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
patientRouter.get('/',authenticationMiddleware,  getAllPatients)

/**
 * @swagger
 * /api/v1/patient:
 *   post:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Patients
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
patientRouter.post('/', authenticationMiddleware,createPatient);

/**
 * @swagger
 * /api/v1/patient/{id}:
 *   get:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Patients
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
patientRouter.get('/:id', authenticationMiddleware, getSinglePatient)

/**
 * @swagger
 * /api/v1/patient/{id}:
 *   put:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Patients
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
patientRouter.put('/:id', authenticationMiddleware, updatePatient);

module.exports = patientRouter;
