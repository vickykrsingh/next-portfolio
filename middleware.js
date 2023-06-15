
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export default async function middleware(req){
    const token = await getToken({req:req,secret:process.env.MY_SECRET})
    if(token){
        return NextResponse.redirect(process.env.NODE_URL)
    }else{
        return NextResponse.next()
    }
}

export const config = {
    matcher:["/auth/login","/auth/register"]
}