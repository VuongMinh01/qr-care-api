import express from "express";
import { addEmployee } from '../../controller/employeeController'
var router = express.Router();

router.post('/addEmployee', addEmployee);

export default router;