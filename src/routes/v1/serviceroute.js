import express from "express";
import { addService, deleteService, updateService, getAllService } from '../../controller/serviceController'

var router = express.Router();

router.post('/addService', addService);
router.delete('/deleteService/:serviceId', deleteService);
router.put('/updateService/:serviceId', updateService);
router.get('/getAllService', getAllService)
export default router;