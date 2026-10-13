import mongoose from "mongoose";

const connectDb=async(req,res)=>{
    try{
             mongoose.connection.on("connected",()=>{
                 console.log("Mongodb Connected");           
             })
            mongoose.connect(`mongodb://localhost:27017/Reactdb`);
    }
    catch(error)
    {
        console.log(error);
    }
}
export default connectDb;