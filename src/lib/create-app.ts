import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "@/middleware/pino-logger";

import type { AppBinding } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBinding>({
    strict: false,
  });
}

export default function createApp() {
  const app = new OpenAPIHono<AppBinding>({
    strict: false,
  });
  app.use(pinoLogger());
  app.onError(onError);
  app.notFound(notFound);
  return app;
}
