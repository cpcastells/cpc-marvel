import { screen, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CharacterPage from "./CharacterPage";
import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";

vi.mock("../../hooks/useCharacters/useCharacters", async () => {
  const actual = await vi.importActual(
    "../../hooks/useCharacters/useCharacters",
  );
  return {
    ...actual,
    useCharacters: () => ({
      isCharacterByIdLoading: true,
    }),
  };
});

vi.mock("../../hooks/useFavorites/useFavorites", async () => {
  const actual = await vi.importActual("../../hooks/useFavorites/useFavorites");
  return {
    ...actual,
    useFavorites: () => ({
      favorites: [],
      addFavorite: vi.fn(),
      removeFavorite: vi.fn(),
    }),
  };
});

describe("Given a CharacterPage page", () => {
  describe("When it is rendered and is loading information", () => {
    test("Then loading bar should be displayed", async () => {
      const loadingText = "Loading bar";

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/characters/1234"]}>
            <Routes>
              <Route
                path="/characters/:characterId"
                element={<CharacterPage />}
              />
            </Routes>
          </MemoryRouter>,
        );
      });

      const bar = screen.getByLabelText(loadingText);
      expect(bar).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the info of Spiderman", () => {
    test("Then Spiderman info should be displayed", async () => {
      const characterName = "Spiderman";
      const characterDescription = "A hero with spider-like abilities.";

      vi.mock("../../hooks/useCharacters/useCharacters", async () => {
        const actual = await vi.importActual(
          "../../hooks/useCharacters/useCharacters",
        );
        return {
          ...actual,
          useCharacters: () => ({
            isCharacterByIdLoading: false,
          }),
        };
      });

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/characters/1234"]}>
            <Routes>
              <Route
                path="/characters/:characterId"
                element={<CharacterPage />}
              />
            </Routes>
          </MemoryRouter>,
        );
      });

      const spidermanName = screen.getByRole("heading", {
        name: characterName,
      });
      const spidermanDescription = screen.getByText(characterDescription);

      expect(spidermanName).toBeInTheDocument();
      expect(spidermanDescription).toBeInTheDocument();
    });
  });
});
