import ServiceModel from "../models/serviceModel"
module.exports.addService = async (req, res, next) => {
    try {
        const { serviceId, serviceName, serviceContent, serviceTime, servicePrice } = req.body;
        const serviceIdCheck = await ServiceModel.findOne({ serviceId });
        const serviceNameCheck = await ServiceModel.findOne({ serviceName });
        if (serviceIdCheck)
            return res.json({ msg: "Service Id already existed", status: false });
        if (serviceNameCheck)
            return res.json({ msg: "Service name already existed", status: false });
        const service = await ServiceModel.create({
            serviceId,
            serviceName,
            serviceContent,
            serviceTime,
            servicePrice,
        });
        return res.json({ status: true, service })
    } catch (error) {
        next(error);
    }
}