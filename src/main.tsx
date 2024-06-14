import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "@fontsource/roboto-condensed";
import { theme } from "./styles/theme/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>,
);
