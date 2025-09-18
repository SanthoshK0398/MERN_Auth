import express from 'express';
import { isAuthenticated, resetPassword, sendResetOtp, sendVerfiyOtp, userLogin, userLogout, userRegister, verifyOtp } from '../controller/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', userRegister);
authRouter.post('/login', userLogin);
authRouter.post('/logout', userLogout);
authRouter.post('/send-verify-otp', userAuth, sendVerfiyOtp);
authRouter.post('/verify-otp', userAuth, verifyOtp);
authRouter.get('/is-auth', userAuth, isAuthenticated);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

export default authRouter;