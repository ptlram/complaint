import mongoose from "mongoose";
import validator from "validator";

const registerschema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            validate(value){
                if(!validator.isEmail(value))
                {
                   throw new Error("invalid")
                }
            }
            
        },
        username:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        confirmpassword: {
            type:String,
            require:true
        },
    }
)
 const Register= mongoose.model("Register",registerschema)

export default Register;