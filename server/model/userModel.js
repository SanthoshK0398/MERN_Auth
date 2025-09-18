import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    otpVerify:{type: String, default: ''},
    otpVerifyExpireAt:{type: Number, default: 0},
    accountVerified:{type: Boolean, default: false},
    otpReset:{type: String, default: ''},
    otpResetExpireAt:{type: Number, default: 0},
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;