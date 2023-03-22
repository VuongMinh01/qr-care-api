import express from 'express'
import { addCustomer } from '../../controller/customerController'
var router = express.Router();
router.post('/addCustomer', addCustomer);
export default router;