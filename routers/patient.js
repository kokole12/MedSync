const express = require('express');
const authenticationMiddleware = require('../middlewares/auth');
const {
    getAllPatients,
    createPatient,
    updatePatient,
    getSinglePatient,
    searchPatient} = require('../controllers/patientConttroller');

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
 *     summary: creates new patient
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
 *     summary: Gets a single patient
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
 *     summary: Updates the patient details
 *     description: Updates a patient.
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

/**
 * @swagger
 * /api/v1/patient/search:
 *   post:
 *     summary: Get data with two query parameters
 *     description: Searches a patient by email or contact.
 *     tags:
 *      - Patients
 *     parameters:
 *       - in: query
 *         name: phoneNumber
 *         required: false
 *         description: Description of the first query parameter.
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         required: false
 *         description: Description of the second query parameter.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 */
patientRouter.post('/search', searchPatient);

module.exports = patientRouter;
