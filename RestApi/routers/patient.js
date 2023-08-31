const express = require('express');
const authenticationMiddleware = require('../middlewares/auth');
const {
    getAllPatients,
    createPatient,
    updatePatient,
    getSinglePatient} = require('../controllers/patientConttroller');

const patientRouter = express.Router();

patientRouter.route('/')
.get(authenticationMiddleware, getAllPatients)
.post(authenticationMiddleware,createPatient);

patientRouter.route('/:id')
.get(authenticationMiddleware,getSinglePatient)
.put(authenticationMiddleware, updatePatient);

module.exports = patientRouter;
