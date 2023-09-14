const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Prefer not to specify'],
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    contactNumber: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: String,
        required: true
    }
})

const patientModel = mongoose.model('patientModel', patientSchema);

module.exports = patientModel;
