import express from 'express'
import { addCustomer, getAllCustomer, getCustomer } from '../../controller/customerController'
var router = express.Router();
router.post('/addCustomer', addCustomer);
router.get('/getAllCustomer', getAllCustomer);
router.get('/getCustomer/:customerId', getCustomer);
export default router;