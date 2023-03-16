import EmployeeModel from "../models/employeeModel"

module.exports.addEmployee = async (req, res, next) => {
    try {
        const { employeeId, employeeName, phone, email, status, address } = req.body;
        const employeeIdCheck = await EmployeeModel.findOne({ employeeId });
        if (employeeIdCheck)
            return res.json({ msg: "Employee Id already existed", status: false });
        const employee = await EmployeeModel.create({
            employeeId,
            employeeName,
            phone,
            email,
            status,
            address
        });
        return res.json({ status: true, employee })
    } catch (error) {
        next(error);
    }
}