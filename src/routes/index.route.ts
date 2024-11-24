import { createRoute, z } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers"
import { createRouter } from "@/lib/create-app";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

const router = createRouter()
  .openapi(createRoute({
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
      200: jsonContent(createMessageObjectSchema("Tasks API"),
      "this the index API")
    },
  }), (c) => {
    return c.json({
      message: "tasks Api",
    });
  });

export default router;
