import userModel from "@/models/user";
import dbConnect from "@/utils/connectDb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // next auth providers 
  providers: [
    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // others provider is here.......
  ],
  // callbacks when user successfully signin or signup 
  callbacks: {
    // signIn function provided by default by next.js and inside the profile argument stored the signin user information
    async signIn({profile}) {
      try {
        // before sign in establish the connection to the database
        await dbConnect();
        // if profile has some value then this is executed
        if (profile) {
          // check if user already exists
          const userExists = await userModel.findOne({ email: profile.email });

          // if not, create a new document and save user in MongoDB
          if (!userExists) {
            await userModel.create({
              email: profile.email,
              username: profile.name.toLowerCase(),
              image: profile.picture,
            });
          }
          // if all is okay the returning true
          return true;
        }
      } catch (error) {
        // if any error occurred then returned false
        return false;
      }
    },
    // session method by default provided by next-auth/callbacks
    async session ({session}){

      if(session){
        try {
          // finding the user is already exists
          const sessionUser = await userModel.findOne({email:session?.user?.email})
          // if user exists then  set the value of session.user._id to sessionUser._id.toString
        session.user.id=sessionUser._id.toString()
        return session;
        } catch (error) {
          return null
        }
      }
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
