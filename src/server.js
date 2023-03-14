import express from 'express';
import { mapOrder } from './utilities/sorts.js';
import { connectDB } from './config/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from '../src/routes/v1/userRoute';

const app = express();

const hostname = 'localhost'
const port = 8017



app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes)
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



// app.listen(port, hostname, () => {
//     console.log(`Server is running at ${hostname}:${port}`);
// })