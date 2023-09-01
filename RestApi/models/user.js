const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        requirec: true
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: true 
    },
    phoneNumber: {
        type: String
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    Hospital: {
        type: String,
        required: true
    },
    specialization: String,
    qualifications: {
    type: [String],
    default: [],
    },
    experience: Number,
    affiliations: {
    type: [String],
    default: [],
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['doctor', 'nurse', 'admin'],
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
