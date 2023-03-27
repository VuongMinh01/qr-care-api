import express from 'express';
import { mapOrder } from './utilities/sorts.js';
import { connectDB } from './config/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from '../src/routes/v1/userRoute';
import serviceRoutes from './routes/v1/serviceRoute';
import employeeRoutes from './routes/v1/employeeRoute';
import customerRoutes from './routes/v1/customerRoute';
import ServiceModel from './models/serviceModel';
import EmployeeModel from './models/employeeModel';
import CustomerModel from './models/customerModel.js';
import CouponModel from './models/couponModel.js';
import couponRoutes from './routes/v1/couponRoute';
const app = express();

const hostname = 'localhost'
const port = 8017



app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes)
app.use("/api/service", serviceRoutes)
app.use("/api/employee", employeeRoutes)
app.use("/api/customer", customerRoutes)
app.use("/api/coupon", couponRoutes)

require("dotenv").config({});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DB Connection Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

// < Chạy port server> //
app.listen(process.env.MONGO_PORT, () => {
    console.log(`Server Started on PORT ${process.env.MONGO_PORT}`);
    console.log(process.env.MONGO_PORT);
});


// connectDB().catch(console.log)
app.get('/', (req, res) => {
    res.end('tesst')
})

app.get('/getAllService', async (req, res) => {
    try {
        const allService = await ServiceModel.find({});
        res.send({ status: true, data: allService })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
})


app.get('/getAllEmployee', async (req, res) => {
    try {
        const allEmployee = await EmployeeModel.find({});
        res.send({ status: true, data: allEmployee })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
})
app.get('/getAllCustomer', async (req, res) => {
    try {
        const allCustomer = await CustomerModel.find({});
        res.send({ status: true, data: allCustomer })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
})
app.get('/getAllCoupon', async (req, res) => {
    try {
        const allCoupon = await CouponModel.find({});
        res.send({ status: true, data: allCoupon })
    } catch (error) {
        console.log('có lỗi trong việc lấy dữ liệu')
    }
})


// app.listen(port, hostname, () => {
//     console.log(`Server is running at ${hostname}:${port}`);
// })