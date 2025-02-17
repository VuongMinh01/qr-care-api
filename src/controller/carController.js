import CarModel from "../models/carModel"
import CustomerModel from "../models/customerModel"
module.exports.addCar = async (req, res, next) => {
    try {
        const { carId, carName, carType, carCompany, carPlate, customerId } = req.body;
        const carIdCheck = await CarModel.findOne({ carId })
        if (carIdCheck) {
            return res.json({ msg: "Car Id already existed" })
        }
        const carNameCheck = await CarModel.findOne({ carName })
        if (carNameCheck) {
            return res.json({ msg: "Car name already existed" })
        }
        const carPlateCheck = await CarModel.findOne({ carPlate })
        if (carPlateCheck) {
            return res.json({ msg: "Car plate already existed" })

        }
        const car = await CarModel.create({
            carId,
            carName,
            carType,
            carCompany,
            carPlate,
            customerId,
        });
        return res.json({ status: true, car })
    } catch (error) {
        next(error);
    }
}

module.exports.deleteCar = async (req, res, next) => {
    try {
        const car = await CarModel.deleteOne(CarModel.carId)
        res.send({ data: true });
        console.log("deleted");
    } catch (error) {
        next(error)
    }
}
module.exports.updateCar = async (req, res, next) => {
    try {
        console.log(req.params.carId);
        const { carName, carType, carCompany, customerId } = req.body;
        const newCar = await CarModel.findOneAndUpdate(req.params.carId, {
            carName: carName,
            carCompany: carCompany,
            carType: carType,
            customerId: customerId,
        });
        return res.json({ status: true, data: newCar })
    } catch (error) {
        next(err)
    }
}

module.exports.getAllCar = async (req, res) => {
    try {
        const allCar = await CarModel.find();
        res.send({ status: true, data: allCar })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
}
module.exports.getInfoCarAndCustomer = async (req, res) => {
    try {
        const allCar = await CarModel.find();
        const allCustomer = await CustomerModel.find();
        res.send({ status: true, data: allCar, data1: allCustomer })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
}