import { StatusCodes } from "http-status-codes";
import User from "../Model/Usermodel.js";
import { ComparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthendicatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/jsonwebToken.js";

export const Register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedpassword = await hashPassword(req.body.password);
  req.body.password = hashedpassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};
export const Login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await ComparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthendicatedError("invalid credenials");

  const token = createJWT({ userID: user._id, role: user.role });

  const Oneday = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + Oneday),
    secure: true,
  });

  res.status(StatusCodes.OK).json({ msg: "user logged" });
};

export const Logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
