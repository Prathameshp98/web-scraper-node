
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')

const connectDB = require('./config/db')

const productsController = require('./controllers/products')

dotenv.config();

const app = express();

app.get('/', productsController.getProducts);

connectDB()
    .then(result => {
        app.listen(8181, () => {
            console.log("App started on port 8181")
        });   
    })
    .catch(err => console.log(err))
