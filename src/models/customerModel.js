const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    customerId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    customerName: {
        type: String,
        require: true,
        min: 5,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        min: 10,
        max: 10,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 50,
    },
    address: {
        type: String,
        requie: true,
        min: 10,
    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    carId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    }

})
module.exports = mongoose.model("Customers", customerSchema)
