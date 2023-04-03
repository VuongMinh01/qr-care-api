const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
    serviceId: {
        type: String,
        require: true,
        min: 5,
        unique: true,
    },
    serviceName: {
        type: String,
        require: true,
        min: 10,
        unique: true,
    },
    serviceContent: {
        type: String,
        require: true,
        min: 10,
    },
    serviceTime: {
        type: String,
        require: true,
    },
    servicePrice: {
        type: String,
        require: true,

    }
});
module.exports = mongoose.model("Services", serviceSchema)
