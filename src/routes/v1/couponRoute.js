import express from 'express'
import { addCoupon, deleteCoupon, updateCoupon, getAllCoupon } from '../../controller/couponController'
var router = express.Router();
router.post('/addCoupon', addCoupon);
router.get('/getAllCoupon', getAllCoupon);
router.delete('/deleteCoupon/:couponId', deleteCoupon);
router.put('/updateCoupon/:couponId', updateCoupon);

export default router;