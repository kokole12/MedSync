const MedicalRecord = require('../models/medical-records');
const {StatusCodes} =  require('http-status-codes');

const createMedicalRecord = async (req, res) => {
    const {medicalHistory, allergies, diagnosis, medications, treatmentPlan, patientId, doctorId} = req.body
    try {
        const medicalRecord = new MedicalRecord({
            medicalHistory,
            allergies,
            diagnosis,
            medications,
            treatmentPlan,
            patient: patientId,
            doctor: doctorId
        });
    
        await medicalRecord.save();
        res.status(StatusCodes.CREATED).json({medicalRecord});

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'Internal server  error'})
    }

}


const getMedicalRecord = async (req, res) => {
    const {id: patientId} = req.params;

    const medicalrecord = await MedicalRecord.find({patient: patientId})

    if (!medicalrecord) {
        throw new Error('No medical records for patient');
    }
    res.status(StatusCodes.OK).json({medicalrecord});
}

module.exports = {createMedicalRecord, getMedicalRecord};
