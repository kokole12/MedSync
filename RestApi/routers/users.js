const userRouter = require('express').Router();
const multer = require('multer');
const {allUsers, getSingleUser, updateUser, deleteUser, uploadProfilePicture} = require('../controllers/users');
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uplaods/doctorProfilePictures');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + Path.extname(file.originalname));
    }
});

const uplaod = multer({storage});


userRouter.route('/').get(allUsers);
userRouter.get('/:id', getSingleUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/:id/upload-profile-picture', uplaod.single('profilePicture'), uploadProfilePicture);

module.exports = userRouter;
