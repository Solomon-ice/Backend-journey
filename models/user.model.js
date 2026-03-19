
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String, 
        require:[
            true, 
            "User name is require"
        ],
        trim:true,
        minLength:2,
        maxLength:50,
    },
      email:{
        type: String, 
        require:[
            true, 
            "User email is require"
        ],
        trim:true,
        unique:true,
        lowercase: true,
       match:(/\s+@\s+\.\s+/,'Please fill a valid email address')
    },
      password:{
        type:String, 
        require:[
            true, 
            "User password is require"
        ],
       
        minLength:6,
      
    }
},{timestamps:true}
)


const User =  mongoose.model('User', userSchema)

export default User