import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

//App Config
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.use('/api/user',userRouter)

//Initializing the middleware
app.use(express.json());
app.use(cors());
// Importing routes


//Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});