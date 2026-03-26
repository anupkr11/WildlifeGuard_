import mongoose from "mongoose";

const wildlifeDataSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("wildlifeData", wildlifeDataSchema, "wildlifedata");