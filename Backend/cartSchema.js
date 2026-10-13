import mongoose,{Schema,model} from "mongoose";
const cartSchema=new Schema({
    email:{
        type:String,
        require:true
    },
   
    products:[
        {
        id:{
        type:Number,
        require:true,
        },
         title:{
        type:String,
        require:true
        },

        quantity: {
            type:Number,
            require:true
        },
        image:{
            type:String,
            require:true
        },
        star:{
            type:Number,
            require:true
        },
        reviews:{
            type:Number,
            require:true
        },
        prevPrice:{
            type:Number,
            require:true
        },
        newPrice: {
            type:Number,
            require:true
        },
        company: {
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        },
        sustainability:{
            type:Number,
            require:true
        },
    }],
    

});
export const Cart =model("Cart",cartSchema);