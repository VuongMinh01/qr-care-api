import express from 'express'
import { addCustomer, getAllCustomer, getCustomerById, getCustomer } from '../../controller/customerController'
var router = express.Router();
router.post('/addCustomer', addCustomer);
router.get('/getAllCustomer', getAllCustomer);
router.get('/getCustomerById/:customerId', getCustomerById);

// router.get('/getCustomer/:customerName', getCustomer);
router.get('/getCustomer/:customerId', getCustomer);

export default router;