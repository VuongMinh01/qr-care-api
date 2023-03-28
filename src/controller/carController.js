import CarModel from "../models/carModel"
module.exports.addCar = async (req, res, next) => {
    try {
        const { carId, carName, carType, carCompany } = req.body;
        const carIdCheck = await CarModel.findOne({ carId })
        if (carIdCheck) {
            return res.json({ msg: "Car Id already existed" })
        }
        const carNameCheck = await CarModel.findOne({ carName })
        if (carNameCheck) {
            return res.json({ msg: "Car name already existed" })
        }
        const car = await CarModel.create({
            carId,
            carName,
            carType,
            carCompany,
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