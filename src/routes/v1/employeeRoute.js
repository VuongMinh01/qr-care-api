import express from "express";
import { addEmployee, getEmployee, getAllEmployee } from '../../controller/employeeController'
var router = express.Router();

router.post('/addEmployee', addEmployee);
router.get('/getEmployee/:employeeId', getEmployee)
router.get('/getAllEmployee', getAllEmployee)
export default router;
