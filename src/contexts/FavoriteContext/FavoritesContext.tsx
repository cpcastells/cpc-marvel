import { PropsWithChildren, createContext, useState } from "react";
import { Character } from "../../types";

interface FavoritesContextProps {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
}

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

export const FavoritesProvider = ({
  children,
  preloadedFavorites = [],
}: PropsWithChildren<{ preloadedFavorites?: Character[] }>) => {
  const [favorites, setFavorites] = useState<Character[]>(preloadedFavorites);

  const addFavorite = (character: Character) => {
    setFavorites((prev: Character[]) => [...prev, character]);
  };

  const removeFavorite = (character: Character) => {
    setFavorites((prev: Character[]) =>
      prev.filter((c) => c.id !== character.id),
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
