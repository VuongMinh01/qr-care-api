const mongoose = require('mongoose')
const slotCarSchema = new mongoose.Schema({
    slotCarId: {
        type: String,
        requie: true,
        min: 5,
        unique: true,
    },
    status: {
        type: String,
        enum: ['free', 'busy', 'maintenance'],
        default: "free",
    }
})
module.exports = mongoose.model("SlotCars", slotCarSchema)