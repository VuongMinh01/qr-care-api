const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
    carId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    carName: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    carType: {
        type: String,
        require: true,
        min: 5,
    },
    carCompany: {
        type: String,
        require: true,
        min: 5,
    },

})
module.exports = mongoose.model("Cars", carSchema)