import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
dotenv.config();


const app = express();


app.get("/products", (req, res) => {
    res.send("Hello from the backend"); 
})


app.listen(3000, () => {
    connectDB();
    console.log("Server running on port 3000");
});


