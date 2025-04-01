import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./service/auth-service";
import { redirect } from "next/dist/server/api-utils";

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      //   return props;
      const { token } = props;
      console.log("auth js:", token);
      return token.token.user;
    },
    // async redirect({url, baseUrl}) {
    //   console.log('url', url);
    //   console.log('baseUrl', baseUrl);

    //   return url.startsWith(baseUrl) ? url : baseUrl + '/protected/client';
    // }
  },
  strategy: "jwt",
  pages: {
    signIn: "/login",
  },
});
