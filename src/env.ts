import { z } from "zod"
import { expand } from "dotenv-expand";
import { config } from "dotenv";

expand(config())
const EnvSchema = z.object({
    NODE_ENV: z.string().default("development"),
    PORT: z.coerce.number().default(3000)
})
const env = EnvSchema.parse(process.env)
export default env;