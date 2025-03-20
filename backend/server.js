import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Productrouter from "./routes/product.route.js";
dotenv.config();


const app = express();
app.use(express.json());

app.use("/api/products", Productrouter);

app.listen(3000, () => {
    connectDB();
    console.log("Server running on port 3000");
});


