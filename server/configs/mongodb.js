import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established successfully.");
    
  })


    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      dbName: 'bg-removal',  // Explicitly specify database name
      useNewUrlParser: true,
      useUnifiedTopology: true
    });


    console.log(`MongoDB Connected: ${conn.connection.host}`);

     // 2. Create a temporary collection with one document
    const db = conn.connection.db;
    await db.collection('init').insertOne({ 
      app: 'bg-removal',
      created: new Date() 
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;