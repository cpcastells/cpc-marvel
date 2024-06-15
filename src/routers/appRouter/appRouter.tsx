import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import paths from "../paths";
import App from "../../components/App/App";
import HomePage from "../../pages/HomePage/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={paths.home} replace /> },
      { path: paths.home, element: <HomePage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
