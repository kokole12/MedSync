const User = require('../models/user');

const allUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({users});
}

const getSingleUser = async (req, res) => {
    const {id: userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({error: 'No user found'});
        return;
    }
    res.status(200).json(user);
}
const updateUser = async (req, res) => {
    const {id: userId} = req.params;
    const user = await User.findOneAndUpdate(userId);
    if (!user) {
        res.status(404).json({error: 'No user found'});
        return;
    }
    res.status(200).json(user);
}
const deleteUser = async (req, res) => {
    const {id: userId} = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        res.status(404).json({error: 'No user found'});
        return;
    }
    res.status(204).json({Message: 'Success'});
}

const uploadProfilePicture = async (req, res) => {
    const {id: userId} = req.params;
    if (!userId) {
        res.status(404).json({error: 'No user found'});
        return;
    }
    const profilePicturePath = req.file.path;
    // To Do: fix the profile image upload
    await User.findOneAndUpdate(userId, {'profile.profilePicture': profilePicturePath});

    res.status(200).json({Message: 'Profile uploaded successfully'});
}

module.exports = {
    allUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    uploadProfilePicture};

