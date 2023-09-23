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
        {new: true});
    
    if (!patient) {
        res.status(404).json({error: 'No patient found'})
    }
    res.status(StatusCodes.OK).json({patient});
}

const searchPatient = async (req, res) => {
    const { contactNumber, email } = req.query;
    const searchTerm = req.body.searchTerm;
    let queryObject = {};
  
    if (contactNumber) {
      queryObject.phoneNumber = { $regex: contactNumber, $options: 'i' };
    }
    if (email) {
      queryObject.email = { $regex: email, $options: 'i' };
    }
  
    console.log(queryObject);
  
    try {
      const patients = await patientModel.find(queryObject);
  
      if (patients.length === 0) {
        return res.status(404).json({ error: 'No patient found' });
      }
  
      res.status(200).json({ patients });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error searching for patients' });
    }
  };
  

module.exports = {
    getAllPatients,
    createPatient,
    getSinglePatient,
    updatePatient,
    searchPatient
}
