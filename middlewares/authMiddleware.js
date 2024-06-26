import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
export const requireSignIn = async (req, res, next) => {
    try {
      const decode = jwt.verify(
        req.headers.authorization,
        process.env.jwt_secret
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };
export const isAdmin= async(req, res, next)=>{
    try {
        const user= await userModel.findById(req.user._id);
        console.log(user);
        if(user.role !== 1){
            res.status(401).send({
                success: false,
                message: "Unauthorized"
            })
        }
        next();
    } catch (error) {
        console.log(error);
    }
}