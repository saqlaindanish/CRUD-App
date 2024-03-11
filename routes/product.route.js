const express = require("express");
const router = express.Router();
const { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js")

router.get("/", getProducts);           // Get all products route
router.get("/:id", getOneProduct);      // Get single product route
router.post("/", createProduct);        // Add product route
router.put("/:id", updateProduct);      // Update product route
router.delete("/:id", deleteProduct);   // Delete products route

module.exports = router