import { NextResponse } from "next/server"
// import { getServerSession } from "next-auth"
// import { authOptions } from "./app/api/auth/[...nextauth]/route"
// import { authOptions } from './app/api/auth/[...nextauth]/route'


export default async function middleware(request){
    
    // const session = await getServerSession(authOptions)
    // return NextResponse.redirect(new URL('/', request.url))
    // return NextResponse.redirect('/')
    // console.log('hello world')
    // return NextResponse.rewrite(new URL('/', request.url))
    // console.log(session)
    // return NextResponse.redirect(process.env.NODE_URL)
    // console.log('first')

}

export const config = {
    matcher:["/dashboard/:path*"]
}