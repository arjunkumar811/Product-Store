import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model";

const router = express.Router();    


router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {    
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.post("/", async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {     

        return res.status(400).json({message: "All fields are required"});
    }   

    const newProduct = new Product(product);

    try {
        await newProduct.save();  
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


export default Productrouter;