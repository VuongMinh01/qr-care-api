import CustomerModel from "../models/customerModel";
import bcrypt from 'bcrypt';
module.exports.addCustomer = async (req, res, next) => {
    try {
        const { customerId, customerName, phone, email, password, address } = req.body;
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
            password,
        });
        return res.json({ status: true, customer })
    } catch (error) {
        next(error)
    }
}