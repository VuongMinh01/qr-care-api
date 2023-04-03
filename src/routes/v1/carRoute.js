import express from 'express'
import { addCar, deleteCar, getAllCar, getInfoCarAndCustomer } from '../../controller/carController'

var router = express.Router();
router.post('/addCar', addCar);
router.get('/getAllCar', getAllCar);
router.delete('/delete/:carId', deleteCar);
router.get('/getAllInfo', getInfoCarAndCustomer);
export default router;