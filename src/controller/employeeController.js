import EmployeeModel from "../models/employeeModel"
const defaultResponse = {
    error: null,
    result: {}
}
module.exports.addEmployee = async (req, res, next) => {
    try {
        const { employeeId, employeeName, phone, email, status, address } = req.body;
        const employeeIdCheck = await EmployeeModel.findOne({ employeeId });
        if (employeeIdCheck)
            return res.json({ msg: "Employee Id already existed", status: false });
        const phoneCheck = await EmployeeModel.findOne({ phone })
        if (phoneCheck) {
            return res.json({ msg: "Phone already existed", status: false });
        }
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
module.exports.getEmployee = async (req, res, next) => {
    try {

        console.log(req.params.employeeId);
        const employee = await EmployeeModel.findOne({ employeeId: req.params.employeeId })
        console.log(employee);
        defaultResponse.results = employee
        return res.json(defaultResponse)
    } catch (error) {
        next(error)
    }
}
module.exports.getAllEmployee = async (req, res) => {
    try {
        const allEmployee = await EmployeeModel.find({});
        res.send({ status: true, data: allEmployee })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
}