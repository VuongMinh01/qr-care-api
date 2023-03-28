import express from 'express'
import { addCoupon, deleteCoupon, updateCoupon } from '../../controller/couponController'
var router = express.Router();
router.post('/addCoupon', addCoupon)
router.delete('/deleteCoupon/:couponId', deleteCoupon)
router.put('/updateCoupon/:couponId', updateCoupon)
export default router;