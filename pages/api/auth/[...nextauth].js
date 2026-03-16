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
          // Sync with our backend with a 3-second timeout
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
          
          // Only attempt sync if we have a valid API URL (not localhost in production)
          if (!apiUrl.includes('localhost')) {
            await axios.post(`${apiUrl}/api/auth/google-sync`, {
              name: user.name,
              email: user.email,
              image: user.image,
              googleId: user.id
            }, { timeout: 3000 });
          }
        } catch (error) {
          console.warn("Backend sync skipped or failed, but continuing login...");
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
