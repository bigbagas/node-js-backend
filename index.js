import express from "express";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js";
import cors from "cors";

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/backendDB");

const db = mongoose.connection;

db.on("error", (error)=>{
    console.log(error);
});

db.once("open",()=>{
    console.log("Database connected...");
});

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port,()=>{
    console.log(`listen port: ${port}`);
});



