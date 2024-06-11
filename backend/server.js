import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongo from "./db/connectToMongo.js";

const app = express();
const PORT = process.env.PORT || 9000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});