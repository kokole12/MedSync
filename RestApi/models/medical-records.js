const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    medicalHistory: {
        type: String,
    },
    allergies: {
        type: String
    },
    diagnosis: {
        type: String,
        required: true
    },
    medications: {
        type: String,
        required: true
    },
    treatmentPlan: {
        type: String,
        required: true
    },
    patientId: {
        type: mongoose.Schema.ObjectId,
        ref: 'patientModel',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;
