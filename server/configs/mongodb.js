import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established successfully.");
    
  })


    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);


    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;