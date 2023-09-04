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
 *      - MedicalRecords
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
router.route('/:id').get(getPatientMedicalRecord);

module.exports = router;
