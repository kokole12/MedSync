const { StatusCodes } = require('http-status-codes');
const medicalRecordModel =  require('../models/medicalRecord');
const patientModel = require('../models/patient');
const { default: mongoose } = require('mongoose');
const User = require('../models/user');

const createMedicalRecord = async (req, res) => {
    console.log(req.body);
    const authenticatedUserId = req.user.userId;
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
    const medicalRecords = await medicalRecordModel.find({}).populate('patient').populate('user');
    res.status(200).json(medicalRecords);
}

const updateMedicalRecord = async (req, res) => {
    const { id: medicalRecordID } = req.params;
    const authenticatedUserId = req.user.userId;

    const medicalRecord = await medicalRecordModel.findOneAndUpdate({_id: medicalRecordID}, req.body, {new: true}).populate('user').populate('patient');
    const userId = medicalRecord.user._id.toString();
    if (authenticatedUserId !== userId) {
        res.status(StatusCodes.BAD_REQUEST).json({error: 'You cant perform this task since you did not create the record'});
        return;
    }
    if (!medicalRecord) {
        res.status(404).json({error: "No medical record"});
        return;
    }
    res.status(200).json(medicalRecord);
};

const getPatientMedicalRecord = async (req, res) => {
    const {id: patientId} = req.params;
    const isValidPatient = await patientModel.findById(patientId);
    
    if (!isValidPatient) {
        res.status(404).json({error: 'No registered patient'});
        return;
    }

    const medicalRecord = await medicalRecordModel.findById(patientId).populate({path:'patient', options: {strict: false}}).populate({path: 'user', options: {strict: false}});
    if (!medicalRecord) {
        res.status(404).json({error: "No medical records"});
        return;
    }
    res.status(200).json({medicalRecord});
}

const deleteMedicalRecord = async (req, res) => {
    const {id: recordId} = req.params;
    const authenticatedUserId = req.user.userId;
    const medicalRecord = await medicalRecordModel.findByIdAndDelete({_id: recordId}).populate('patient').populate('user');
    const userId = medicalRecord.user._id.toString();
    if (authenticatedUserId !== userId) {
        res.status(StatusCodes.BAD_REQUEST).json({error: "You cant perfom this task because you didnt create this record"});
        return;
    }
    if (!medicalRecord) {
        res.status(404).json({error: 'No medical with id '+ recordId});
        return;
    }

    
    res.status(204).json({Message: "deleting medical record"})      

}

const searchMedicalRecord = async(req, res) => {
    let queryObject = {};
    const {email, contactNumber} = req.query;
    const searchterm  =  req.body.searchterm;

    if (contactNumber) {
        queryObject.phoneNumber = { $regex: contactNumber, $options: 'i' };
    }
    if (email) {
        queryObject.email = { $regex: email, $options: 'i' };
    }

    try {
        const patient = await patientModel.find(queryObject);

        if (patient.length === 0) {
            res.status(StatusCodes.NOT_FOUND).json({error: 'No patient found'});
            return;
        }

        const patientDetails = patient[0];
        const patientId = patientDetails._id.toString();

        const medicalRecord = await medicalRecordModel.find({_id: patientId}).populate('user').populate('patient');

        if (medicalRecord.length === 0) {
            res.status(StatusCodes.NOT_FOUND).json({error: 'No medical records'});
            return;
        }
        res.status(200).json( medicalRecord );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error searching for medical records' });
    }

}
module.exports = {
    createMedicalRecord,
    getPatientMedicalRecord,
    getMedicalRecords, 
    updateMedicalRecord,
    deleteMedicalRecord,
    searchMedicalRecord
}
