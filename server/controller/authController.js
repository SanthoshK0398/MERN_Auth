import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../model/userModel.js';
import transporter from '../config/nodemailer.js';

//Register User Logic
export const userRegister = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.json({success: false, message: 'Missing Details' })
    }

    try{
        const userExists = await userModel.findOne({email});

        if (userExists){
            return res.json({success: false, message: 'User already exixts'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel({name, email, password: hashedPassword});
        await newUser.save();

        const jwtToken = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        
        res.cookie('token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV==='production',
            sameSite: process.env.NODE_ENV==='production' ? 'none' : 'strict',
            maxAge: 7*24*60*60*1000,
        })

        //sending email to registered user
        const mailOptions ={
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to UngalIyer App',
            text: `Hello ${name}, Welcome to UngalIyer App. Your registration is successful with email: ${email}. Enjoy our services.`
        }
        await transporter.sendMail(mailOptions);
        
        return res.json({success: true, message: 'User registered successfully'})

    }catch(error){
        return res.json({success: false, message: error.message})
    }
}

//Login User Logic
export const userLogin = async (req, res) => {
    const {email, password} = req.body;

        if (!email || !password){
            return res.json({success: false, message: 'Please Provide email and passsword'});
        }

        try{
            const userExists = await userModel.findOne({email});

            if(!userExists){
                return res.json({success: false, message: 'User does not exist Pleasse register!'})
            }

            const isPassMatch = await bcrypt.compare(password, userExists.password);
            if(!isPassMatch){
                return res.json({success: false, message: 'Incorrect Password'});
            }

            const jwtToken = jwt.sign({id: userExists._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
            
            res.cookie('token', jwtToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV==='production',
                sameSite: process.env.NODE_ENV==='production' ? 'none' : 'strict',
                maxAge: 7*24*60*60*1000,
        });
            return res.json({success: true, message: 'User logged in successfully'});

        }catch(error){
            return res.json({success: false, message: error.message});
        }
    }

    //Logout User Logic
    export const userLogout = async (req, res)=>{

        try{
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV==='production',
                sameSite: process.env.NODE_ENV==='production' ? 'none' : 'strict',
            })

            return res.json({success: true, message: 'user logged out successfully'})

        }catch(error){
            return res.json({success: false, message: error.message});
        }
    } 

    //sending OTP for account verification
    export const sendVerfiyOtp = async(req, res)=>{

        const {userId} = req.body;

        try{
            const user = await userModel.findById(userId);

            if(!user){
                return res.json({success: false, message: 'User does not exist'});
            }

            if(user.accountVerified){
                return res.json({success: false, message: 'Account already verified'});
            }
            
            const otp = String(Math.floor(100000 + Math.random() * 90000));
           
            user.otpVerify = otp;
            user.otpVerifyExpireAt = Date.now() + 24 * 60 * 60 * 1000;;
            await user.save();

            //sending email to registered user
            const mailOptions ={
                from: process.env.SENDER_EMAIL,
                to: user.email,
                subject: 'UngalIyer App - Account Verification OTP',
                text: `Welcome to UngalIyer App. Your OPT for account verification is ${otp}. This OTP is valid for 1 day.`
            }
            await transporter.sendMail(mailOptions);
            
            return res.json({success: true, message: 'OTP sent successfully'})

        }catch(error){
            console.log('Error in sendVerfiyOtp:', error);
            return res.json({success: false, message: error.message});
        }
    }

    //verifying OTP for account verification
    export const verifyOtp = async(req, res)=>{
        const {userId, otp} = req.body;

        if(!userId || !otp){
            return res.json({success: false, message: 'Missing Details'});
        }
        try{
            const user = await userModel.findById(userId);

            if(!user){
                return res.json({success: false, message: 'User does not exist, verification failed'});
            }
            
            if(user.otpVerify !== otp || user.otpVrify == ''){
                return res.json({success: false, message: 'Invalid or Expired OTP'});
            }
            if(user.otpVerifyExpireAt < Date.now()){
                return res.json({success: false, message: 'OTP Expired, Please try again'});
            }
            
            user.accountVerified = true;
            user.otpVerify = '';
            user.otpVerifyExpireAt = 0;
            await user.save();

            return res.json({success: true, message: 'Account verified successfully'})

        }catch(error){
            return res.json({success: false, message: error.message});
        }
    }

//checking user authentication status
export const isAuthenticated = async(req, res)=>{
    try{
        return res.json({success: true, message: 'user is authenticated'});
    }catch(error){
    return res.json({success: false, message: error.message});
    }
}

//reset password - resetOtp
export const sendResetOtp = async(req, res)=>{
    const {email} = req.body;

    if(!email){
        return res.json({success: false, message: 'Please provide email'});
    }

    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: 'User does not exist'});
        }

        const otp = String(Math.floor(100000 + Math.random() * 90000));
           
            user.otpReset = otp;
            user.otpResetExpireAt = Date.now() + 15 * 60 * 1000;
            await user.save();

            //sending email to registered user
            const mailOptions ={
                from: process.env.SENDER_EMAIL,
                to: user.email,
                subject: 'UngalIyer App - Rest Password OTP',
                text: `Welcome to UngalIyer App. Your OPT for password reset is ${otp}. This OTP is valid for 15 mins.`
            }
            await transporter.sendMail(mailOptions);
            
            return res.json({success: true, message: 'Password reset OTP sent successfully'})

    }catch(error){
        return res.json({success: false, message: error.message});
    }   
}

//verifying reset password OTP
export const resetPassword = async(req, res)=>{
    const {email, newPassword, otp} = req.body;

    if(!newPassword || !otp || !email){
        return res.json({success: false, message: 'Missing Details'});
    }
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: 'User does not exist, password reset failed'});
        }

        if(user.otpReset !== otp || user.otpReset === ''){
            return res.json({success: false, message: 'Invalid OTP'});
        }

        if(user.otpResetExpireAt < Date.now()){
            return res.json({success: false, message: 'OTP Expired, Please try again'});
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        user.otpReset = '';
        user.otpResetExpireAt = 0;

        await user.save();

        return res.json({success: true, message: 'Password reset successfully'})

    }catch(error){
        return res.json({success: false, message: error.message});
    }
}