import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
 
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      bearer: string
      stgId: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Authorization/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            const errorText = await res.text();
            console.error("Auth API Error:", res.status, errorText);
            return null;
          }

          const data = await res.json();
          const bearerToken = data.token;
          const cookieHeader = data.headers.find((header: any) => header.key === "Set-Cookie");
          const stgId = cookieHeader.value[0];

          const returnUser = {
            email: credentials?.email as string,
            bearer: bearerToken,
            stgId: stgId,
          };
          
          return returnUser;
        } catch (error) { 
          console.error("Auth Exception: ", error);
          return null;
        }
      },
    })
  ],
  callbacks: {
    jwt(obj) {
      if (obj.user) {
        obj.token.bearer = (obj.user as { bearer?: string }).bearer;
        obj.token.stgId = (obj.user as { stgId?: string }).stgId;
      }
      
      return obj.token;
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          bearer: token.bearer,
          stgId: token.stgId,
        },
      }
    },
  },
  session: {
    maxAge: 60 * 60,
  }
})