import creatApp from "./lib/create-app";
import configureOpenAPI from "./lib/configure-openAPI";

const app = creatApp()
configureOpenAPI(app)
export default app;
