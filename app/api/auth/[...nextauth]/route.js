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
    async signIn({ profile }) {
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
    async jwt({ token, user }) {
      await dbConnect();
      const userData = await userModel.findOne({ email: token?.email });
      if (userData) {
        token.role = userData.role;
        token._id = userData._id.toString();
      }
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) session.user.role = token?.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
