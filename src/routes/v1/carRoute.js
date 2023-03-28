import express from 'express'
import { addCar, deleteCar } from '../../controller/carController'

var router = express.Router();
router.post('/addCar', addCar)
router.delete('/delete/:carId', deleteCar);
export default router;