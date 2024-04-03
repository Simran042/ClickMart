import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
export const registerController= async(req, res)=>{
    try {
        const{name, email, password, phone, address}= req.body;
        if(!name || !email || !password || !phone || !address){
            return res.send({
                error: "Please fill all desired fields"
            })
        }


        const exuser= await userModel.findOne({email});
        if(exuser){
            return res.status(200).send({
                success: true,
                message: "Already registered. Please login"
            })
        }
        const hashedPass= await hashPassword(password);
        const user= await new userModel({name, email, password: hashedPass, phone, address}).save();
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error on registerController",
            error
        })
    }
}

export const forgotPasswordController= async(req, res)=>{
    try {
        console.log("entered");
        const {email, answer, newPassword}= req.body;
        console.log(req.body);
        if(!email){
            res.status(400).send({
                success: false,
                message: "Email Required"
            })
        }
        if(!answer){
            res.status(400).send({
                success: false,
                message: "Answer Required"
            })
        }
        if(!newPassword){
            res.status(400).send({
                success: false,
                message: "New Password Required"
            })
        }

        const user= await userModel.findOne({email, answer})
        if(!user){
            res.status(400).send({
                success: false,
                message: "Wrong Email or answer"
            })
        }
        const hashed= await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id, {password: hashed})
        res.status(200).send({
            success: true,
            message: "Password reset successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}
export const loginController= async(req, res)=>{
    try {
        const {email, password}= req.body;
        if(!email || !password){
            return res.status(200).send({
                success: false,
                message:'Invalid email or password'
            })
        }
        const exuser= await userModel.findOne({email});
        if(!exuser){
            return res.status(200).send({
                success: false,
                message: "User not found. Please register first"
            })
        }
        const match= await comparePassword(password, exuser.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }
        const token= await jwt.sign({_id: exuser._id}, process.env.jwt_secret,{
            expiresIn: "1d"
        })
        res.status(200).send({
            success: true,
            message: "Login Successful",
            user:{
                name: exuser.name,
                email: exuser.email,
                phone: exuser.phone,
                address: exuser.address
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error on loginController",
            error
        })
    }
}
export const testController= async(req, res)=>{
    console.log("Protected");
    res.send({messgae: "Protected route"});
}
// export default { registerController };