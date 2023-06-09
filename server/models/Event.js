import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    district: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: Date, required: true},
    img: {type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: "User" }
});


export default model("Event", eventSchema)