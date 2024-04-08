import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    if (!name || !email || !password || !phone || !address || !answer) {
      return res.send({
        error: "Please fill all desired fields",
      });
    }

    const exuser = await userModel.findOne({ email });
    if (exuser) {
      return res.status(200).send({
        success: true,
        message: "Already registered. Please login",
      });
    }
    const hashedPass = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPass,
      phone,
      address,
      answer,
    }).save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error on registerController",
      error,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    console.log("entered");
    const { email, answer, newPassword } = req.body;
    console.log(req.body);
    if (!email) {
      res.status(400).send({
        success: false,
        message: "Email Required",
      });
    }
    if (!answer) {
      res.status(400).send({
        success: false,
        message: "Answer Required",
      });
    }
    if (!newPassword) {
      res.status(400).send({
        success: false,
        message: "New Password Required",
      });
    }

    const user = await userModel.findOne({ email, answer });
    if (user == null) {
      res.status(400).send({
        success: false,
        message: "Wrong Email or answer",
      });
    }
    console.log(user);
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    console.log(email, password);
    const exuser = await userModel.findOne({ email });
    if (!exuser) {
      return res.status(200).send({
        success: false,
        message: "User not found. Please register first",
      });
    }
    const match = await comparePassword(password, exuser.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    const token = await jwt.sign({ _id: exuser._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        _id: exuser._id,
        name: exuser.name,
        email: exuser.email,
        phone: exuser.phone,
        address: exuser.address,
        role: exuser.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error on loginController",
      error,
    });
  }
};
export const testController = async (req, res) => {
  console.log("Protected");
  res.send({ messgae: "Protected route" });
};
// export default { registerController };

//update prfole
export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({
        error:
          "Passsword is required and it should be atleast 6 character long",
      });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};
