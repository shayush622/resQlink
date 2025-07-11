import NextAuth from "next-auth";
import { authOptions } from "../../../lib/auth";

// @ts-expect-error: next-auth v4 default export is not typed as callable
export default NextAuth(authOptions); 