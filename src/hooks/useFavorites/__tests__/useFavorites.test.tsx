import { useFavorites } from "../useFavorites";
import { act, renderHook } from "@testing-library/react";
import { FavoritesProvider } from "../../../contexts/FavoriteContext/FavoritesContext";
import { Character } from "../../../types";
import createMockCharacter from "../../../mocks/factories/characterFactory";
import { wrapper } from "../../../utils/testUtils";

describe("Given a useFavorites hook", () => {
  describe("When it is called within a FavoritesProvider", () => {
    test("Then it should return the default context value", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <FavoritesProvider>{children}</FavoritesProvider>
      );

      const { result } = renderHook(() => useFavorites(), { wrapper });

      expect(result.current.favorites).toEqual([]);
    });

    test("Then it should allow adding and removing favorites", async () => {
      const { result } = renderHook(() => useFavorites(), { wrapper: wrapper });

      const character: Character = createMockCharacter({
        id: 1,
        name: "Spiderman",
      });

      act(() => {
        result.current.addFavorite(character);
      });

      expect(result.current.favorites).toEqual([character]);

      act(() => {
        result.current.removeFavorite(character);
      });

      expect(result.current.favorites).toEqual([]);
    });
  });
});
