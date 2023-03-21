import express from "express";
import { addService, deleteService, updateService } from '../../controller/serviceController'

var router = express.Router();

router.post('/addService', addService);
router.delete('/deleteService/:serviceId', deleteService);
router.put('/updateService/:serviceId', updateService);

export default router;