import express, { json } from 'express';
import { config } from 'dotenv';
import connectdb from './config/db.js';
import morgan from 'morgan';
import authRoute from "./routes/authRoute.js"
import cors from 'cors';
config();

connectdb();
console.log("db connected");
//rest object
const app= express();
//rest api
app.use(cors())
app.use(morgan('dev'))
app.use(json())
app.get('/', (req, res)=>{
    res.send(`<h1>Welcome to ECommerce App</h1>`)
})
app.use('/api/v1/auth', authRoute);
const port= process.env.port || 8000;
app.listen(port, ()=>{
    console.log(`Server currently running on ${port}`)
})