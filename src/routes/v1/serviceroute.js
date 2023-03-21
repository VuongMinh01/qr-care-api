import express from "express";
import { addService, deleteService } from '../../controller/serviceController'

var router = express.Router();

router.post('/addService', addService);
router.delete('/deleteService/:serviceId', deleteService);

export default router;