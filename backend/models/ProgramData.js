import mongoose from "mongoose";

const programDataSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("programData", programDataSchema, "programdata");