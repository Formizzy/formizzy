import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {params: {scope: "openid email profile"}}
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  callbacks: {
    jwt: async ({token, account })=> {
      console.log("account: ", account)
      console.log("token:", token)
      if (account?.access_token) {
        token.account = account;
      }
      return token;
    },
    session: async ({session, user,token}) => { 
      session.user = token;
      return session
    }
  },
});

