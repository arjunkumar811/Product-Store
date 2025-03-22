import express from "express";
import { deleteProduct, getAllProducts, postProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();    


router.get("/", getAllProducts);
router.delete("/:id", deleteProduct)
router.post("/", postProduct)
router.put("/:id", updateProduct)


export default router;