const express = require("express");
const mongoose = require("mongoose");
const app = express()
const productRoute = require("./routes/product.route.js");
require("dotenv").config();
const url = process.env.DB_URI;

app.use(express.json())
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("Hello From Node API server")

})


// Make connection to Database
mongoose.connect(url)
    .then(() => {
        console.log("Connected to database");
        app.listen(8080, () => {
            console.log("The server is running successfully");
        })
    })
    .catch(() => {
        console.log("Connectionn Failed");
    })