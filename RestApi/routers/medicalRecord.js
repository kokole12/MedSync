const express = require('express');
const authenticationMiddleware = require('../middlewares/auth');
const {createMedicalRecord, getPatientMedicalRecord} = require('../controllers/medicalRecord');

const router = express.Router();

router.route('/').post(authenticationMiddleware, createMedicalRecord);
router.route('/:id').get(getPatientMedicalRecord);

module.exports = router;
