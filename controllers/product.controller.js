const Product = require("../models/product.model.js");

// Create/Add product in Database
const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ messgae: error.messgae })
    }
}


// Get all products from Database
const getProducts = async (req, res) => {

    try {
        const product = await Product.find({});
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ messgae: error.messgae })
    }

}


// Get single product from Database
const getOneProduct = async (req, res) => {

    try {
        const { id } = req.params
        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({ messgae: "Product not found" })
        }

        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ messgae: error.messgae })
    }
}


// Update a specific product 
const updateProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ messgae: "Product not found" })
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({ messgae: error.messgae })
    }
}


// Delete a specific product
const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ messgae: "Product not found" })
        }

        res.status(200).json({ messgae: "Product has deleted successfully" })

    } catch (error) {
        res.status(500).json({ messgae: error.messgae })
    }
}

module.exports = {
    getProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}