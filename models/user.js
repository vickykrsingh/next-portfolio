import { Schema , model , models } from "mongoose";

const userSchema = new Schema ({
    
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    image:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png'
    },
    role:{
        type:Number,
        default:0
    },
},{timestamps:true})


const userModel = models.users || model('users',userSchema)

export default userModel;