import dbConnect from "@/utils/connectDb"
import { hashedPass } from "@/utils/dcryptpass"
import userModel from "@/models/user"
// import {verify,sign} from 'jsonwebtoken'


export const POST = async (req) => {
    const {username,email,password,confirmPassword} = await req.json()

    await dbConnect()
    if(!username){
        return new Response(JSON.stringify('Name is required'),{status:400})
    }
    if(!email){
        return new Response(JSON.stringify('Email is required'),{status:400})
    }
    if(!password){
        return new Response(JSON.stringify('Password is required'),{status:400})
    }
    if(!confirmPassword){
        return new Response(JSON.stringify('Confirm Password is required'),{status:400})
    }

    const existingUser = await userModel.findOne({email})
    if(existingUser){
        return new Response(JSON.stringify('User already exists'),{status:401})
    }

    try {
        if(password?.toString()!=confirmPassword?.toString()){
            return new Response(JSON.stringify('Password does not matched'),{status:400})
        }

        const hashPass = await hashedPass(password)

    
        await new userModel({
            username:username,
            email:email,
            password:hashPass
        }).save()

        return new Response(JSON.stringify({
            success:true,
            message:"user registered Successfully"
        }),{status:201})
    } catch (error) {
        return new Response(JSON.stringify({
            success:false, 
            message:"Something went wrong",
            error:error.message,
        }),{status:500})
    }
} 