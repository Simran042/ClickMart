import mongoose from "mongoose";

const connectdb= async ()=>{
    try {
        const con= await mongoose.connect(process.env.mongo_url);
        console.log(con.connection.host);
    } catch (error) {
        console.log(error)        
    }
};

export default connectdb;