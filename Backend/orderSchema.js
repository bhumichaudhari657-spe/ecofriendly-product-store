import mongoose,{Schema,model} from "mongoose";
const orderSchema = new mongoose.Schema({
    email:String,
    fullName: String,
    phone: String,
    address: String,
    quantity: Number,
    delivery: String,
    products: [
      {
        name: String,
        price: Number
      }
    ],
    
  });
  export const Order =model("Order",orderSchema);