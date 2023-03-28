import express from 'express'
import { addCustomer, getAllCustomer } from '../../controller/customerController'
var router = express.Router();
router.post('/addCustomer', addCustomer);
router.get('/getAllCustomer', getAllCustomer)
export default router;