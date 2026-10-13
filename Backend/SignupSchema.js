import mongoose,{Schema,model} from "mongoose";
const SignupSchema=new Schema({
   
    Fname:{
        type:String,
        require:true
    },
    Lname:{
        type:String,
        require:true
    },
    signupPassword:{
         type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    },
    phoneNo:{
         type:Number,
        require:true
    },
    address:{
         type:String,
        require:true
    },
    

});
export const SignupUsers=model("SignupUsers",SignupSchema);