const { StatusCodes } = require('http-status-codes');
const medicalRecordModel =  require('../models/medicalRecord');
const patientModel = require('../models/patient');
const { default: mongoose } = require('mongoose');
const User = require('../models/user');

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

const getMedicalRecords = async (req, res) => {
    const medicalRecords = await medicalRecordModel.find({});
    for (const medicalRecord of medicalRecords) {
        const patientId = medicalRecord.patient;
        const id = patientId._id.toString()
        const patient = await patientModel.findOne({ _id: id});
    }
    res.status(200).json(medicalRecords);
}

const updateMedicalRecord = async (req, res) => {
    const {id: medicalRecordID} = req.params;
    const authenticatedUserId = req.user.userId;
    if (!medicalRecordID) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Missing Id'});
        return;
    }
    const medicalRecord = await medicalRecordModel.findByIdAndUpdate(medicalRecordID, req.body, {new: true});
    if (!medicalRecord) {
        res.status(404).json({error: 'No medical record found'});
        return;
    }
    const doctorId = medicalRecord.doctor;
    console.log(doctorId)
    res.status(200).json(medicalRecord);
}

const getPatientMedicalRecord = async (req, res) => {
    const {id: patientId} = req.params;
    const isValidPatient = await patientModel.findById(patientId);
    
    if (!isValidPatient) {
        res.status(404).json({error: 'No registered patient'});
        return;
    }

    const medicalRecord = await medicalRecordModel.findById(patientId);
    if (!medicalRecord) {
        res.status(404).json({error: "No medical records"});
        return;
    }
    res.status(200).json({medicalRecord});
}

module.exports = {
    createMedicalRecord,
    getPatientMedicalRecord,
    getMedicalRecords, updateMedicalRecord
}
