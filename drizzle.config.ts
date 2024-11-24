import env from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  dialect: "turso",
  schema: "./src/db/schema.ts",

  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN 
  },
});
