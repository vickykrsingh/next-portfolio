import dbConnect from "@/utils/connectDb";
import contactModel from "@/models/contact";
import { NextResponse } from "next/server";

// Contact creation of message by from the client side which receiving 5 parameter 
export const POST = async (req) => {
  const {name,email,interest,budget,message} = await req.json()
    try {
        // database connection
        await dbConnect();
        // checking user is already submitted query or not if yes then stop it and return 
        const existingMessage = await contactModel.findOne({email:email})
        if(existingMessage){
          return NextResponse.json({
            message:'You are already send a message please try again after some time',
            success:false,
          })
        }
        // checking any field is not empty if empty returning message
        if (!name || !email || !interest || !budget || !message ) {
          return NextResponse.json({
            message:'All fields are required',
            success:false,
          })
        }
        // creating new message
        const contact_message = await new contactModel({
          name,
          email,
          interest,
          budget,
          message,
        }).save();
        // sending response after creating a new message successfully
        return NextResponse.json({
          message:'Query submitted successfully.',
          success:true,
        })
      } catch (error) {
        // if anything error then sending response
        return NextResponse.json({
          message:'Something went wrong in server side',
          success:false,
        })
      }
}





export const GET = async () => {
  await dbConnect()
 try {
    const messages = await contactModel.find();
    return NextResponse.json({
        messages,
        success:true,
        message:"fetched all messages successfully."
    })
 } catch (error) {
    return NextResponse.json({
        success:false,
        message:"Internal server fault"
    })
 }
}


export const DELETE = async (request) => {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  try {
    await dbConnect()
    await contactModel.findByIdAndDelete(id)
    return NextResponse.json({
      message:'deleted successfully',
      success:true,
    },{status:200})
  } catch (error) {
    return NextResponse.json({
      message:'internal server fault',
      success:false
    },{status:500})
  }
}