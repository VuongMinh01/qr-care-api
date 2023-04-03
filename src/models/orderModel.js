const { Double } = require("mongodb");
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    customerId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    createdDate: {
        type: String,
        require: true,
    },
    totalMoney: {
        type: Double,
        require: true,
    },
    employeeId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    slotCarId: {
        type: String,
        requie: true,
        min: 5,
    }
});
module.exports = mongoose.model("Orders", orderSchema)
