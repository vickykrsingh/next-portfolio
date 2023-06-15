import dbConnect from "@/utils/connectDb"
import userModel from '../../../models/user'
import { comparePassword } from "@/utils/dcryptpass"
// import { sign } from "jsonwebtoken"

export const POST = async (req) => {
    const {email,password} = await req.json()
    try {
        await dbConnect()
        if(!email){
            return new Response(JSON.stringify('email is required'),{status:400})
        }
        if(!password){
            return new Response(JSON.stringify('Password is required'),{status:400})
        }
        const user = await userModel.findOne({email})

        if(!user){
            return new Response(JSON.stringify('Invalid username or password'),{status:500})
        }

        const matchPassword = comparePassword(password,user?.password)

        if(!matchPassword){
            return new Response(JSON.stringify('Invalid username or password'),{status:500})
        }
        // const token = await sign(user._id,process.env.JWT_SECRET,{expiresIn:'7d'})

        const resp = userModel.findById(user._id).select('-password')

        return new Response(JSON.stringify({
            user:resp,
            // token:token
        }))

    } catch (error) {
        console.log(error.message)
    }
}