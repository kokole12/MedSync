const express = require('express');
const { getMedicalRecord, createMedicalRecord} = require('../controllers/medicalRecord');
const authenticationMiddleware =  require('../middlewares/auth')

const recordRouter = express.Router();

recordRouter.route('/').post(authenticationMiddleware, createMedicalRecord);
recordRouter.route('/:id').get(authenticationMiddleware, getMedicalRecord);

module.exports = recordRouter;
