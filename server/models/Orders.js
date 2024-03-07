const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({   //array of orders for parti
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('order', OrderSchema)