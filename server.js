import express from 'express';
const app = express();
import connection from "./db.js"
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import cors from 'cors'

app.use(express.json());
app.use('/user',userRoute);
app.use(cors());
dotenv.config();
app.get('/',(req,res)=>{
    res.json("hello world")
})

const PORT=3001 || process.env.PORT
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))

connection();