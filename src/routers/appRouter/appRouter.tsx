import { RouteObject, createBrowserRouter } from "react-router-dom";
import paths from "../paths";
import App from "../../components/App/App";

const routes: RouteObject[] = [{ path: paths.root, element: <App /> }];

const appRouter = createBrowserRouter(routes);

export default appRouter;
