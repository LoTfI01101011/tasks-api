import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";
import { pinoLogger } from "@/middleware/pino-logger";
import type { AppBinding } from "./types";

export default function creatApp() {
    const app = new OpenAPIHono<AppBinding>({
        strict: false,
    });
    app.use(pinoLogger());
    app.onError(onError);
    app.notFound(notFound);
    return app;
}
