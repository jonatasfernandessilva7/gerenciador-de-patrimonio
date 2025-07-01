const express = require('express');
const userRouter = express.Router();
import UserController from '../controllers/UserController';
import recoverPassword from '../controllers/RecoverPasswordController';
const authenticateToken = require('../middleware/Middleware');

const userController = new UserController();

userRouter.post('/created-user',userController.createdUser);
userRouter.post('/auth/login-user',userController.loginUser);
userRouter.post('/recover-password', recoverPassword);

userRouter.put('/update-password',  userController.updatePassword);
userRouter.put('/update-user/:id',  userController.updateUserData);

userRouter.get('/profile-user/:id',userController.viewProfileData);

userRouter.delete('/delele-user', userController.deleteUserAccount);

module.exports = userRouter;