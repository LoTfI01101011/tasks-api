import type { RouteHandler } from "@hono/zod-openapi";
import type { listRoute } from "./tasks.routes";
import type { AppBinding } from "@/lib/types";

export const list: RouteHandler<listRoute , AppBinding> = (c) => {
    return c.json([{
        name:"first task",
        done: true 
    }])
}