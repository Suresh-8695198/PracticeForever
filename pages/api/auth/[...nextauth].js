import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          // Sync with our backend
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/google-sync`, {
            name: user.name,
            email: user.email,
            image: user.image,
            googleId: user.id
          });
          user.backendId = response.data.user.id;
          return true;
        } catch (error) {
          console.error("Error syncing Google user with backend:", error.message);
          return true; // Still allow sign in even if backend sync fails (or change to false if mandatory)
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.backendId = user.backendId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.backendId = token.backendId;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
