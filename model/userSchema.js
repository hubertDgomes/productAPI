import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    otp : {
        type : String
    },
    expOtp : {
        type : Date
    }
})

export default mongoose.model("usersData" , userSchema)