import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastname: {
    type: String,
    default: "lastname",
  },
  jobLocation: {
    type: String,
    default: "my location",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: String,
  avatarPublicId: String,
});

Userschema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", Userschema);
