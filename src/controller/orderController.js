import OrderModel from "../models/orderModel"
module.exports.addOrder = async (req, res, next) => {
    try {
        const { orderId, customerId, serviceId, createdDate } = values;
        const orderIdCheck = await OrderModel.findOne({ orderId })
        if (orderIdCheck) {
            return res.json({ msg: "OrderId đã tồn tại" });
        }
        const order = await OrderModel.create({
            orderId, customerId, serviceId, createdDate,
        })
        return res.json({ status: true, order })
    } catch (error) {
        next(error);
    }
}
module.exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await ServiceModel.deleteOne(OrderModel.orderId)
        res.send({ data: true });
        console.log("deleted");
    } catch (error) {
        next(error);
    }
}


module.exports.getAllOrder = async (req, res) => {
    try {
        const allOrder = await OrderModel.find({});
        res.send({ status: true, data: allOrder })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
}