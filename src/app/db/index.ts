import { drizzle } from "drizzle-orm/neon-http";

const CONNECTION_URL = process.env.DATABASE_URL;

export const db = drizzle(CONNECTION_URL!);