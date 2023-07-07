const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);