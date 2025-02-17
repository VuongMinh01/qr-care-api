const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        require: true,
        unique: true,
        min: 5,
    },
    employeeName: {
        type: String,
        requie: true,
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
    status: {
        type: String,
        requie: true,

    },
    address: {
        type: String,
        requie: true,
        min: 10,
    }
})
module.exports = mongoose.model("Employees", employeeSchema)
