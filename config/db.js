const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_DATABASE_USER}:${process.env.MONGO_DATABASE_PASSWORD}@${process.env.MONGO_DATABASE_CLUSTER}/${process.env.MONGO_DATABASE_NAME}`

const connectDB = async() => {
    mongoose
        .connect(MONGODB_URI)
        .then(result => {
            console.log(`MongoDB Connected: ${result.connection.host}` .cyan.underline.bold); 
        })
        .catch(err => console.log(err))
    
}

module.exports = connectDB