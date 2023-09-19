const express = require('express');
const authenticationMiddleware = require('../middlewares/auth');
const {createMedicalRecord, getPatientMedicalRecord} = require('../controllers/medicalRecord');

const router = express.Router();

/**
 * @swagger
 * /api/v1/medical:
 *   post:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Medical Records
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               diagnosis:
 *                 type: string
 *               treatmentPlan:
 *                 type: string
 *               medications:
 *                 type: string
 *               medicalHistory:
 *                 type: string
 *               patient:
 *                 type: string
 *                 description: patiendId
 *     responses:
 *       '201':
 *         description: medical record created.
 *       '500':
 *         description: Internal server error.
 */
router.route('/').post(authenticationMiddleware, createMedicalRecord);

/**
 * @swagger
 * /api/v1/medical/{id}:
 *   get:
 *     summary: Gets medical records of the patient
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Medical Records
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
router.route('/:id').get(getPatientMedicalRecord);

module.exports = router;
