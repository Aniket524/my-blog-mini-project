import mongoose from'mongoose';
import dotenv from 'dotenv'

dotenv.config();


const connection = async() => {
    try {
       await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
       console.log("database connected successfully");
    } catch (error) {
        console.error("error whle coonecting with the database",error);
    }
}

export default connection;