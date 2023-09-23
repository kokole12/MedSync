const { StatusCodes } = require('http-status-codes');
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
    const authenticatedUserId = req.user.userId;
    if (userId !== authenticatedUserId) {
        res.status(StatusCodes.UNAUTHORIZED).json({error: 'Unauthorized request'});
        return;
    }
    const user = await User.findOneAndUpdate(userId);
    if (!user) {
        res.status(404).json({error: 'No user found'});
        return;
    }
    res.status(200).json(user);
}
const deleteUser = async (req, res) => {
    const {id: userId} = req.params;
    const authenticatedUserId = req.user.userId;
    if (userId !== authenticatedUserId) {
        res.status(StatusCodes.UNAUTHORIZED).json({error: 'Unauthorized request'});
        return;
    }
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        res.status(404).json({error: 'No user found'});
        return;
    }
    res.status(204).json({Message: 'Success'});
}

const uploadProfilePicture = async (req, res) => {
    const { id: userId } = req.params;
    const authenticatedUserId = req.user.userId;
  
    try {
      if (userId !== authenticatedUserId) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized request' });
      }
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'No user found' });
      }
  
      user.profile.profilePicture = req.file.path;
  
      await user.save();
  
      res.status(StatusCodes.OK).json({ Message: 'Profile uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
};

module.exports = {
    allUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    uploadProfilePicture
};
