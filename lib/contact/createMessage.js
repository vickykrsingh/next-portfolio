"use server"
import dbConnect from "./connectDb";
import contactModel from "@/models/contact";
// Contact creation of message by from the client side which receiving 5 parameter 
export const createMessage = async (name,email,interest,budget,message) => {
    try {
        // database connection
        await dbConnect();
        // checking user is already submitted query or not if yes then stop it and return 
        const existingMessage = await contactModel.find({email:email})
        if(existingMessage){
            return JSON.stringify({
                message:"Your have already Submitted query please wait for response!",
                success:false,
              },{status:400})
        }
        // checking any field is not empty if empty returning message
        if (!name) {
          return JSON.stringify({
            message:"Name is required",
            success:false,
          },{status:400})
        }
        if (!email) {
            return JSON.stringify({
                message:"Email is required",
                success:false,
              },{status:400})
        }
        if (!interest) {
            return JSON.stringify({
                message:"Interest is required",
                success:false,
              },{status:400})
        }
        if (!budget) {
            return JSON.stringify({
                message:"Budget is required",
                success:false,
              },{status:400})
        }
        if (!message) {
            return JSON.stringify({
                message:"Message is required",
                success:false,
              },{status:400})
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
        return JSON.stringify({
            contact_message,
            message:"Your query submitted successfully.",
            success:true
        })
      } catch (error) {
        // if anything error then sending response
        return JSON.stringify({
            success:false,
            message:"Internal server error something went wrong!"
        })
      }
}