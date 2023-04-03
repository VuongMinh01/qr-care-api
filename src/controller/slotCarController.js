import slotCarModel from "../models/slotCarModel"
module.exports.addCar = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}

module.exports.deleteSlotCar = async (req, res, next) => {
    try {
        const slotCar = await slotCarModel.deleteOne(slotCarModel.carId)
        res.send({ data: true });
        console.log("deleted");
    } catch (error) {
        next(error)
    }
}

