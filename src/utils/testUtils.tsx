import { PropsWithChildren } from "react";
import { RouterProvider } from "react-router";
import { createMemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme/theme";
import { render } from "@testing-library/react";

export const wrapWithRouter = (ui: React.ReactElement) => {
  const routes = [{ path: "/", element: ui }];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  render(ui, { wrapper: Wrapper });
};
