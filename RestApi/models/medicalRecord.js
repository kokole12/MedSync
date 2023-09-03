const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    diagnosis: {
        type: String,
        required: true
    },
    treatmentPlan: {
        type: String,
        required: true
    },
    medications: {
        type: String,
        required: true
    },
    medicalHistory: {
        type: String,
        required: true,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patientModel',
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

const medicalRecordModel = mongoose.model('medicalRecordModel', medicalRecordSchema);

module.exports = medicalRecordModel;
