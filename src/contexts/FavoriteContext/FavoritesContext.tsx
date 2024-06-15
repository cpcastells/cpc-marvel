import { PropsWithChildren, createContext, useState } from "react";
import { Character } from "../../types";

interface FavoritesContextProps {
  favorites: Character[];
  isFavoritesView: boolean;
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
  showFavoritesView: () => void;
  hideFavoritesView: () => void;
}

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

export const FavoritesProvider = ({
  children,
  preloadedFavorites = [],
}: PropsWithChildren<{ preloadedFavorites?: Character[] }>) => {
  const [favorites, setFavorites] = useState<Character[]>(preloadedFavorites);
  const [isFavoritesView, setIsFavoritesView] = useState(false);

  const addFavorite = (character: Character) => {
    setFavorites((prev: Character[]) => [...prev, character]);
  };

  const removeFavorite = (character: Character) => {
    setFavorites((prev: Character[]) =>
      prev.filter((c) => c.id !== character.id),
    );
  };

  const showFavoritesView = () => {
    setIsFavoritesView(true);
  };

  const hideFavoritesView = () => {
    setIsFavoritesView(false);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavoritesView,
        addFavorite,
        removeFavorite,
        showFavoritesView,
        hideFavoritesView,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
