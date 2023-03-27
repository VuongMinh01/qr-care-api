import express from 'express'
import { addCoupon, deleteCoupon } from '../../controller/couponController'
var router = express.Router();
router.post('/addCoupon', addCoupon)
router.delete('/deleteCoupon/:couponId', deleteCoupon)
export default router;