const mongoose = require("mongoose");
const orderDetailSchema = new mongoose.Schema({
    orderDetailId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    serviceId: {
        type: String,
        require: true,
        min: 5,
        unique: true,
    },
    quantity: {
        type: Double,
        require: true,
    },

});
module.exports = mongoose.model("OrderDetails", orderDetailSchema)
