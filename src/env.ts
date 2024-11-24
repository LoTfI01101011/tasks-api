import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());
const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  DATABASE_AUTH_TOKEN: z.string().optional()
}).refine((input) => {
  if (input.NODE_ENV === "production") {
    return !!input.DATABASE_AUTH_TOKEN
  }
  return true;
});
const env = EnvSchema.parse(process.env);
export default env;
