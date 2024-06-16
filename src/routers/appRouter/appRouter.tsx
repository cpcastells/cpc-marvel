import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import paths from "../paths";
import App from "../../components/App/App";
import {
  LazyCharacterPage,
  LazyHomePage,
} from "./lazyComponents/lazyComponents";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={paths.home} replace /> },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
      },
      {
        path: `${paths.character}${paths.id}`,
        element: (
          <Suspense>
            <LazyCharacterPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
