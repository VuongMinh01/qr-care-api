import CouponModel from "../models/couponModel";
module.exports.addCoupon = async (req, res, next) => {
    try {
        const { couponId, couponName, couponContent, startDate, endDate, types } = req.body;
        const couponIdCheck = await CouponModel.findOne({ couponId });
        const couponNameCheck = await CouponModel.findOne({ couponName });
        if (couponIdCheck)
            return res.json({ msg: "Id already existed", status: false });
        if (couponNameCheck)
            return res.json({ msg: "Name already existed", status: false });
        const coupon = await CouponModel.create({
            couponId,
            couponName,
            couponContent,
            startDate,
            endDate,
            types,
        });
        return res.json({ status: true, coupon })
    } catch (error) {
        next(error)
    }
}
module.exports.deleteCoupon = async (req, res, next) => {
    try {
        const coupon = await CouponModel.deleteOne(CouponModel.couponId)
        res.send({ data: true });
        console.log("deleted");
    } catch (error) {
        next(error);
    }
}
module.exports.updateCoupon = async (req, res, next) => {
    console.log(req.params.couponId);
    const { couponName, couponContent, startDate, endDate, types } = req.body;
    const newCoupon = await CouponModel.findOneAndUpdate(req.params.couponId, {
        couponName: couponName,
        couponContent: couponContent,
        startDate: startDate,
        endDate: endDate,
        types: types,
    });
    return res.json({ status: true, data: newCoupon });
}