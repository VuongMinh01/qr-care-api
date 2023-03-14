import express from 'express';
import { mapOrder } from './utilities/sorts.js';
import { connectDB } from './config/index.js';
const app = express();

const hostname = 'localhost'
const port = 8017

connectDB().catch(console.log)
app.get('/', (req, res) => {
    res.end('tesst')
})


app.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
})