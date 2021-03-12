import userModel from "../models/UserModel.js";
import generateJwtToken from "../utils/genToken.js";

// controller to register a user
export const REGISTER_POST = async (req, res, next) => {
  const { userName, email, password } = req.body;

  try {
    const isUser = await userModel.findOne({ email });

    if (isUser) {
      const err = new Error("Email Already Registered");
      err.status = 409;
      next(err);
      return;
    }

    const user = await userModel.create({ userName, email, password });
    const token = await generateJwtToken(user._id);

    res.status(201).json({
      email: user.email,
      userName: user.userName,
      userId: user._id,
      token,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.status = 500;
    next(err);
  }
};

// controller to login user
export const LOGIN_POST = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isUser = await userModel.findOne({ email });

    if (!isUser) {
      const err = new Error("Invalid Email Address");
      err.status = 404;
      next(err);
      return;
    }

    const user = await userModel.login(email, password);

    if (user.status === 403) {
      const err = new Error("Incorrect password");
      err.status = 403;
      next(err);
      return;
    }

    const token = await generateJwtToken(user._id);

    res.status(200).json({
      email: user.email,
      userName: user.userName,
      userId: user._id,
      token,
      status: 200,
    });
    console.log(token);
  } catch (error) {
    const err = new Error(error.message);
    err.status = 500;
    next(err);
  }
};
