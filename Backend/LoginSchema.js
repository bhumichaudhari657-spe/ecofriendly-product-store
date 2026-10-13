import mongoose,{Schema,model} from "mongoose";
const LoginSchema=new Schema({
   
    email:{
        type:String,
        require:true
    },
    loginPassword:{
        type:String,
        require:true
    }
});
export const LoginUsers=model("LoginUsers",LoginSchema);
