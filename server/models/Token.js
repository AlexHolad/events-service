import mongoose from "mongoose";
const { Schema, model } = mongoose;

const tokenSchema = new Schema({
  userId: {type: String},
  refreshToken: String ,
});

export default model("Token", tokenSchema);
