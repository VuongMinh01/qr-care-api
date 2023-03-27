const mongoose = require('mongoose')
const couponSchema = new mongoose.Schema({
    couponId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    couponName: {
        type: String,
        require: true,
        min: 5,
    },
    couponContent: {
        type: String,
        require: true,
        min: 10,
    },
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },
    types: {
        type: String,
        require: true,
    }
})
module.exports = mongoose.model("Coupons", couponSchema)