import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import paths from "../paths";
import App from "../../components/App/App";
import HomePage from "../../pages/HomePage/HomePage";
import CharacterPage from "../../pages/CharacterPage/CharacterPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={paths.home} replace /> },
      { path: paths.home, element: <HomePage /> },
      { path: `${paths.character}${paths.id}`, element: <CharacterPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
