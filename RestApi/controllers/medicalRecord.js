const { StatusCodes } = require('http-status-codes');
const medicalRecordModel =  require('../models/medicalRecord');
const patientModel = require('../models/patient');
const { default: mongoose } = require('mongoose');

const createMedicalRecord = async (req, res) => {
    console.log(req.body);
    const authenticatedUserId = req.user.userId;
    console.log(authenticatedUserId);
    const {diagnosis, treatmentPlan, medications, medicalHistory, patient} = req.body;
    const patientId = new mongoose.Types.ObjectId(patient);

    patientModel.findById(patientId).then((patient) => {
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
    });
    
    const medicalRecord = new medicalRecordModel({
        diagnosis,
        treatmentPlan,
        medications,
        medicalHistory,
        patient: patientId,
        user: authenticatedUserId
    });

    await medicalRecord.save();
    res.status(StatusCodes.CREATED).json({medicalRecord});
}

const getPatientMedicalRecord = async (req, res) => {
    res.send('got medical record for a patient');
}

module.exports = {
    createMedicalRecord,
    getPatientMedicalRecord
}
