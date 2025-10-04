import { betterAuth } from "better-auth";
import * as schema from "../db/schema";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  trustedOrigins: ["http://localhost:3000", "http://192.168.31.206:3000"],
});