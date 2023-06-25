import { Schema , model , models } from "mongoose";

const userSchema = new Schema ({
    
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    },
},{timestamps:true})


const userModel = models.users || model('users',userSchema)

export default userModel;