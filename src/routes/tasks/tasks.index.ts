import { createRouter } from "@/lib/create-app";
import * as routes from "./tasks.routes";
import * as hundlers from "./tasks.hundlers"
const router = createRouter().openapi(routes.list , hundlers.list);

export default router ;