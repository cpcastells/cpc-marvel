import { screen, act, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CharacterPage from "./CharacterPage";
import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import createMockCharacter from "../../mocks/factories/characterFactory";
import { Character } from "../../types";

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

let initialFavorites: Character[] = [];

const setupFavorites = (favorites: Character[]) => {
  initialFavorites = favorites;
};

const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();

vi.mock("../../hooks/useFavorites/useFavorites", () => ({
  useFavorites: () => ({
    favorites: initialFavorites,
    addFavorite: mockAddFavorite,
    removeFavorite: mockRemoveFavorite,
  }),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a CharacterPage page", () => {
  describe("When it is rendered and is loading information", () => {
    test("Then loading bar should be displayed", async () => {
      const loadingText = "Loading bar";

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/character/1234"]}>
            <Routes>
              <Route
                path="/character/:characterId"
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
          <MemoryRouter initialEntries={["/character/1234"]}>
            <Routes>
              <Route
                path="/character/:characterId"
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

    test("If is not a favorite, then the 'Add to favorites' button should be displayed", async () => {
      const addButtonDescription = "Add to favorites";

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/character/1234"]}>
            <Routes>
              <Route
                path="/character/:characterId"
                element={<CharacterPage />}
              />
            </Routes>
          </MemoryRouter>,
        );
      });

      const favoriteButton = screen.getByRole("button", {
        name: addButtonDescription,
      });

      expect(favoriteButton).toBeInTheDocument();
    });

    test("If is not a favorite, then if the user clicks on the 'Add to favorites' button, the character should be added to favorites", async () => {
      const addButtonDescription = "Add to favorites";

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/character/1234"]}>
            <Routes>
              <Route
                path="/character/:characterId"
                element={<CharacterPage />}
              />
            </Routes>
          </MemoryRouter>,
          { preloadedFavorites: [] },
        );
      });

      const favoriteButton = screen.getByRole("button", {
        name: addButtonDescription,
      });

      await act(() => {
        userEvent.click(favoriteButton);
      });

      await waitFor(() => {
        expect(mockAddFavorite).toHaveBeenCalledTimes(1);
      });
    });

    test("If is a favorite, then the 'Remove from favorites' button should be displayed", async () => {
      setupFavorites([createMockCharacter({ name: "Spiderman", id: 1234 })]);
      const removeButtonDescription = "Remove from favorites";

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/character/1234"]}>
            <Routes>
              <Route
                path="/character/:characterId"
                element={<CharacterPage />}
              />
            </Routes>
          </MemoryRouter>,
          { preloadedFavorites: [createMockCharacter({ name: "Spiderman" })] },
        );
      });

      const favoriteButton = screen.getByRole("button", {
        name: removeButtonDescription,
      });

      expect(favoriteButton).toBeInTheDocument();
    });

    test("If is a favorite, then if the user clicks on the 'Remove from favorites' button, the character should be removed from favorites", async () => {
      setupFavorites([createMockCharacter({ name: "Spiderman", id: 1234 })]);
      const removeButtonDescription = "Remove from favorites";

      await act(async () => {
        renderWithProviders(
          <MemoryRouter initialEntries={["/character/1234"]}>
            <Routes>
              <Route
                path="/character/:characterId"
                element={<CharacterPage />}
              />
            </Routes>
          </MemoryRouter>,
        );
      });

      const removeButton = screen.getByRole("button", {
        name: removeButtonDescription,
      });

      await act(() => {
        userEvent.click(removeButton);
      });

      await waitFor(() => {
        expect(mockRemoveFavorite).toHaveBeenCalledTimes(1);
      });
    });
  });
});
