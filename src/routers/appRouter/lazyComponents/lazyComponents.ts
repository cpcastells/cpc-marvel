import { lazy } from "react";

export const LazyHomePage = lazy(
  () => import("../../../pages/HomePage/HomePage"),
);

export const LazyCharacterPage = lazy(
  () => import("../../../pages/CharacterPage/CharacterPage"),
);
