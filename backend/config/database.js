import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://anup94622:p6lH5fryb0udg2Hc@learningmongo.8gbbg2w.mongodb.net/wildlifeDB",
  );
  console.log("Connected to MongoDB", mongoose.connection.name);
};

export default dbConnect;

