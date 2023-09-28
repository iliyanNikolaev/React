import User from "@/models/User";
import connectToDB from "@/utils/db"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs';

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(credentials) {
          await connectToDB();
          try {
            const isExist = await User.findOne({ username: credentials.username });
  
            if(!isExist) {
              return null;
            }
            const comparing = await bcrypt.compare(credentials.password, isExist.password);
            if(!comparing) {
              return null;
            }
  
            return {
              name: { _id: isExist._id, username: isExist.username}
            };
          } catch (err) {
            throw new Error(err.message);
          }
        }
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
  }