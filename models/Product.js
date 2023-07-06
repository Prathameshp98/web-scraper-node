const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nutritionSchema = new Schema({
    protein: {
        type: String,
        required: true
    },
    kcal: {
        type: String,
        required: true
    }
})

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
    // nutrition: {
    //     type: nutritionSchema,
    //     required: true
    // },
    // description: {
    //     type: String,
    //     required: true
    // },
    images: {
        type: Array,
        required: true
    },
    // type: {
    //     type: String,
    //     required: true
    // }
},
{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);