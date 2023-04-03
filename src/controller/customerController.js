import CustomerModel from "../models/customerModel";
import CarModel from "../models/carModel"
import bcrypt from 'bcrypt';
const defaultResponse = {
    error: null,
    resultCustomer: {},
    resultCar: {},
}
module.exports.addCustomer = async (req, res, next) => {
    try {
        const { customerId, customerName, phone, email, address, carPlate } = req.body;
        const customerIdCheck = await CustomerModel.findOne({ customerId });
        const customerPhoneCheck = await CustomerModel.findOne({ phone });
        const customerEmailCheck = await CustomerModel.findOne({ email });
        const carPlateCheck = await CustomerModel.findOne({ carPlate })
        // const hashedPassword = await bcrypt.hash(password, 10);
        if (customerIdCheck)
            return res.json({ msg: "Id already existed", status: false });
        if (customerPhoneCheck)
            return res.json({ msg: "Phone number already used", status: false });
        if (customerEmailCheck)
            return res.json({ msg: "Email  already used", status: false });
        if (carPlateCheck) {
            return res.json({ msg: "Car plate already existed", status: false })
        }
        const customer = await CustomerModel.create({
            customerId,
            customerName,
            phone,
            email,
            address,
            carPlate,
        });
        return res.json({ status: true, customer })
    } catch (error) {
        next(error)
    }
}
module.exports.getAllCustomer = async (req, res) => {
    try {
        const allCustomer = await CustomerModel.find();
        res.send({ status: true, data: allCustomer })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
}
module.exports.getCustomer = async (req, res, next) => {
    try {

        console.log(req.params.customerId);
        const customer = await CustomerModel.findOne({ customerId: req.params.customerId })
        const car = await CarModel.findOne({ customerId: req.params.customerId })

        console.log(customer);
        defaultResponse.resultCustomer = customer
        defaultResponse.resultCar = car
        return res.json(defaultResponse)
    } catch (error) {
        next(error)
    }
}