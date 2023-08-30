const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: true 
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['doctor', 'nurse', 'admin'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
