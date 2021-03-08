import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  // bcrypt salt
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);

  this.password = await bcrypt.hash(this.password, salt);
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
