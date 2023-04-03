import CustomerModel from "../models/customerModel";
import bcrypt from 'bcrypt';
const defaultResponse = {
    error: null,
    result: {}
}
module.exports.addCustomer = async (req, res, next) => {
    try {
        const { customerId, customerName, phone, email, address } = req.body;
        const customerIdCheck = await CustomerModel.findOne({ customerId });
        const customerPhoneCheck = await CustomerModel.findOne({ phone });
        const customerEmailCheck = await CustomerModel.findOne({ email });
        // const hashedPassword = await bcrypt.hash(password, 10);
        if (customerIdCheck)
            return res.json({ msg: "Id already existed", status: false });
        if (customerPhoneCheck)
            return res.json({ msg: "Phone number already used", status: false });
        if (customerEmailCheck)
            return res.json({ msg: "Email  already used", status: false });
        const customer = await CustomerModel.create({
            customerId,
            customerName,
            phone,
            email,
            address,
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
        console.log(customer);
        defaultResponse.results = customer
        return res.json(defaultResponse)
    } catch (error) {
        next(error)
    }
}