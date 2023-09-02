const express = require('express');
const { getMedicalRecord, createMedicalRecord} = require('../controllers/medicalRecord');
const authenticationMiddleware =  require('../middlewares/auth')

const recordRouter = express.Router();

recordRouter.route('/').post(createMedicalRecord);
recordRouter.route('/:id').get(getMedicalRecord);

module.exports = recordRouter;
