const userRouter = require('express').Router();
const multer = require('multer');
const {allUsers, getSingleUser, updateUser, deleteUser, uploadProfilePicture} = require('../controllers/users');
const authenticationMiddleware = require('../middlewares/auth');
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, uniqueSuffix + ext);
    },
  });
  
  const upload = multer({ storage: storage });
  

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get a list of patients
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Doctors
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
userRouter.route('/').get(allUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Gets a single doctor or nurse
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Doctors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
userRouter.get('/:id', getSingleUser);
/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: updates a Doctor or Nurse
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Doctors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
userRouter.put('/:id', authenticationMiddleware, updateUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Deletes a user
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Doctors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
userRouter.delete('/:id', authenticationMiddleware, deleteUser);

/**
 * @swagger
 * /api/v1/users/{id}/upload-profile-pitcture:
 *   post:
 *     summary: updates the profile
 *     description: Retrieve a list of users from the database.
 *     tags:
 *      - Doctors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A list of users.
 *       '500':
 *         description: Internal server error.
 */
userRouter.post('/:id/upload-profile-picture', uplaod.single('profilePicture'),  authenticationMiddleware, uploadProfilePicture);

module.exports = userRouter;
