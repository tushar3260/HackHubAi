import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();
export const register = async (req, res, next) => {
  try {
    const { name, email, password, phone, role } = req.body;
    // console.log(name);
    // check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ success: false, message: "Email already in use" });

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // create new user
    const user = await User.create({
      name,
      email,
      phone,
      role: role || "user",
      passwordHash,
    });

    // generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "7d" }
    );

    // send response
    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // find user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    // compare password using model method
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    // generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    next(err);
  }
};
