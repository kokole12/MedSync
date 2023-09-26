const express = require('express');
const authenticationMiddleware = require('../middlewares/auth');
const {
    createMedicalRecord,
    getPatientMedicalRecord,
    getMedicalRecords,
    updateMedicalRecord,
    deleteMedicalRecord} = require('../controllers/medicalRecord');
const { route } = require('express/lib/router');

const router = express.Router();

/**
 * @swagger
 * /api/v1/medical:
 *   post:
 *     summary: Create a new medical record
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
* /api/v1/medical:
*   get:
*     summary: Get a list of medical records
*     description: Retrieve a list of medical records from the database.
*     tags:
*      - Medical Records
*     responses:
*       '200':
*         description: A list of users.
*       '500':
*         description: Internal server error.
*/
router.get('/', authenticationMiddleware, getMedicalRecords);
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
router.route('/:id/patient').get(getPatientMedicalRecord);

/**
 * @swagger
 * /api/v1/medical/{id}:
 *   put:
 *     summary: updates medical record
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
router.put('/:id', authenticationMiddleware, updateMedicalRecord);

/**
 * @swagger
 * /api/v1/medical/{id}:
 *   delete:
 *     summary: Deletes a medical record
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Medical Records
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
router.delete('/:id', authenticationMiddleware,deleteMedicalRecord);

module.exports = router;
