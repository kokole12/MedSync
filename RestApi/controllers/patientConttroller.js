const patientModel = require('../models/patient');
const {StatusCodes} =  require('http-status-codes');

const getAllPatients = async (req, res) => {
    const patients = await patientModel.find({});
    res.status(StatusCodes.OK).json({patients});
}

const createPatient = async (req, res) => {
    const patient = await patientModel.create({...req.body});
    res.status(StatusCodes.CREATED).json({patient});
}

const getSinglePatient = async (req, res) => {
    const {id: patientId} = req.params;
    const patient = patientModel.findOne({_id: patientId});

    if (!patient) {
        res.status(404).json({error: 'No patient found'});
    }
    res.status(StatusCodes.OK).json({patient});
}

const updatePatient = async(req, res) => {
    const {id: patientId} = req.params;
    const patient = await patientModel.findOneAndReplace({_id: patientId}, {...req.body},
        {new: true, overwrite: true});
    
    if (!patient) {
        res.status(404).json({error: 'No patient found'})
    }
    res.status(StatusCodes.OK).json({patient});
}

const searchPatient = async (req, res) => {
    const {contactNumber, email} = req.query
    const searchTerm = req.body;
    let queryObject = {};
    if (contactNumber) {
        queryObject.contactNumber = contactNumber;
    }
    if (email) {
        queryObject.email = email;
    }
    console.log(queryObject);
    const patient = await patientModel.find({
        queryObject
        // $text: { $search: searchTerm, $diacriticSensitive: true },
    });

    if (!patient) {
        res.status(404).json('No patient found');
    }

    res.json({patient});
}

module.exports = {
    getAllPatients,
    createPatient,
    getSinglePatient,
    updatePatient,
    searchPatient
}
