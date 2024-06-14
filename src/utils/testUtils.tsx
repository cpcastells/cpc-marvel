import { RouterProvider } from "react-router";
import { createMemoryRouter } from "react-router-dom";

const wrapWithRouter = (ui: React.ReactElement) => {
  const routes = [{ path: "/", element: ui }];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};

export default wrapWithRouter;
