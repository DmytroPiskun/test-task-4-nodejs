import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
});

const userModel = model("user", userSchema);

export default userModel;