import express from 'express'
import { addCar, deleteCar, getAllCar } from '../../controller/carController'

var router = express.Router();
router.post('/addCar', addCar);
router.get('/getAllCar', getAllCar);
router.delete('/delete/:carId', deleteCar);
export default router;