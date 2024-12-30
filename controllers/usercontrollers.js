import { StatusCodes } from "http-status-codes";
import User from "../Model/Usermodel.js";
import Job from "../Model/Jobmodel.js";
import { v2 as cloudinary } from "cloudinary";
import { formatImage } from "../middleware/MulterMiddleware.js";

export const getCurrentuser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userID });
  const userWithoutpassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutpassword });
};
export const getApplicationstats = async (req, res) => {
    const users = await User.countDocuments()
    const jobs = await Job.countDocuments()
  res.status(StatusCodes.OK).json({ users,jobs});
};
export const getUpdateuser = async (req, res) => {
    const file = formatImage(req.file)
    const newUser = {...req.body}
    delete newUser.password
    if(req.file){
      const response = await cloudinary.uploader.upload(file)
      newUser.avatar = response.secure_url
      newUser.avatarPublicId = response.public_id
    }
    const upadteduser = await User.findByIdAndUpdate(req.user.userID,newUser)

    if(req.file && upadteduser.avatarPublicId){
      await cloudinary.uploader.destroy(upadteduser.avatarPublicId)
    }

  res.status(StatusCodes.OK).json({ msg: "get update user" });
};
