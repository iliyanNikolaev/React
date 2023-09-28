import User from "@/models/User";
import connectToDB from "@/utils/db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs';

const authOptions = {
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }