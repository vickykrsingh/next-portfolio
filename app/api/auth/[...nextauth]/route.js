import userModel from "@/models/user";
import dbConnect from "@/utils/connectDb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "@/utils/dcryptpass";
import axios from "axios";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await dbConnect();
          if (!email || !password) {
            throw new Error("Invalid Email or Password");
          }
          // check existing user
          const credentialUser = await userModel.findOne({ email: email });
          if (!credentialUser) {
            throw new Error("Couldn't registered!");
          }
          const matchedPass = await comparePassword(password, credentialUser.password);
          if (!matchedPass) {
            throw new Error("Wrong Password");
          }
          console.log(credentialUser)
          return JSON.stringify(credentialUser);
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      // console.log('ACCOUNT IS ------------------ ',account)
      // console.log('PROFILE IS ------------------ ',profile)
      // console.log('USER IS ------------------ ',user)
      // console.log('CREDENTIALS IS ------------------ ',credentials)
      try {
        await dbConnect();

        if (profile) {
          // check if user already exists
          const userExists = await userModel.findOne({ email: profile.email });

          // if not, create a new document and save user in MongoDB
          if (!userExists) {
            await userModel.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
            });
          }
          

          return true;
        }
        if(credentials){
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid Email or Password");
          }
          // check existing user
          const credentialUser = await userModel.findOne({ email: credentials?.email });
          if (!credentialUser) {
            throw new Error("Couldn't registered!");
          }
          const matchedPass = await comparePassword(credentials.password, credentialUser.password);
          if (!matchedPass) {
            throw new Error("Wrong Password");
          }
          return true;
        }
        

      } catch (error) {
        return false;
      }
    },
    async jwt({ token , account }) {
      return { token , account }
    },
  },
  secret: process.env.MY_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
