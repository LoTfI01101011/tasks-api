import { createRouter } from "@/lib/create-app";
import { createRoute, z } from "@hono/zod-openapi";

const router = createRouter()
    .openapi(createRoute({
        method: "get",
        path: "/",
        responses: {
            200:{
                content: {
                    "application/json":{
                        schema: z.object({
                            message: z.string()
                        }),
                    }
                },
                description: "this the index endpoint"
            }
        }
    }),
    (c) => {
        return c.json({
            message: "tasks Api"
        })
    }
    
    );

export default router;