import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "@fontsource/roboto-condensed";
import "@fontsource/roboto-condensed/700.css";
import "@fontsource/roboto-condensed/500.css";
import "@fontsource/roboto-condensed/400.css";
import { theme } from "./styles/theme/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter.tsx";
import { FavoritesProvider } from "./contexts/FavoriteContext/FavoritesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FavoritesProvider>
        <RouterProvider router={appRouter} />
      </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
