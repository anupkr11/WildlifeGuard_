import mongoose from "mongoose";

const blogDataSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("blogData", blogDataSchema, "blogdata");