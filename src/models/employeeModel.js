const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        require: true,
        unique: true,
        min: 3,
    },
    employeeName: {
        type: String,
        requie: true,
        min: 10,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 20,
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
