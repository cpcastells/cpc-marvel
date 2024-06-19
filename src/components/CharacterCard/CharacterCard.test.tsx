import { screen, waitFor } from "@testing-library/react";
import createMockCharacter from "../../mocks/factories/characterFactory";
import CharacterCard from "./CharacterCard";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

describe("Given a CharacterCard component", () => {
  const characterMock = createMockCharacter({ name: "Spiderman" });

  describe("When it receives a character with the name 'Spiderman'", () => {
    test("Then it should display the character's name", () => {
      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
      );
      const characterName = screen.getByRole("heading", {
        name: characterMock.name,
      });

      expect(characterName).toBeInTheDocument();
    });

    test("Then it should display the character's image", () => {
      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
      );
      const characterImage = screen.getByAltText(
        `Image of ${characterMock.name}`,
      );

      expect(characterImage).toBeInTheDocument();
    });

    test("Then it should display a add to favorites button", () => {
      const buttonDescription = "Add to favorites";

      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
      );
      const favoriteButton = screen.getByRole("button", {
        name: buttonDescription,
      });

      expect(favoriteButton).toBeInTheDocument();
    });
  });

  describe("When it receives a character with the name 'Spiderman' and the character is not in favorites", () => {
    test("Then it should display the 'Add to favorites' button", () => {
      const buttonDescription = "Add to favorites";

      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
      );
      const favoriteButton = screen.getByRole("button", {
        name: buttonDescription,
      });

      expect(favoriteButton).toBeInTheDocument();
    });

    test("Then if the user clicks on the 'Add to favorites' button, the icon should switch to the 'Remove from favorites' button", async () => {
      const addButtonDescription = "Add to favorites";
      const removeButtonDescription = "Remove from favorites";

      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
      );
      const favoriteButton = screen.getByRole("button", {
        name: addButtonDescription,
      });

      await act(() => {
        userEvent.click(favoriteButton);
      });

      await waitFor(() => {
        const removeButton = screen.getByRole("button", {
          name: removeButtonDescription,
        });
        expect(removeButton).toBeInTheDocument();
      });
    });

    test("Then if the user clicks on the 'Add to favorites' button, the favorites counter in header should show '1'", async () => {
      const addButtonDescription = "Add to favorites";

      renderWithProviders(
        <MemoryRouter initialEntries={["/home"]}>
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <CharacterCard character={characterMock} loading="eager" />
                </>
              }
            />
          </Routes>
        </MemoryRouter>,
      );

      const favoriteButton = screen.getByRole("button", {
        name: addButtonDescription,
      });

      await act(() => {
        userEvent.click(favoriteButton);
      });

      await waitFor(() => {
        const favoritesIcon = screen.getByLabelText("Show favorites");
        expect(favoritesIcon).toBeInTheDocument();
        expect(favoritesIcon).toHaveTextContent("1");
      });
    });
  });

  describe("When it receives a character with the name 'Spiderman' and the character is in favorites", () => {
    test("Then it should display the 'Remove from favorites' button", () => {
      const buttonDescription = "Remove from favorites";

      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
        { preloadedFavorites: [characterMock] },
      );
      const favoriteButton = screen.getByRole("button", {
        name: buttonDescription,
      });

      expect(favoriteButton).toBeInTheDocument();
    });

    test("Then if the user clicks on the 'Remove from favorites' button, the icon should switch to the 'Add to favorites' button", async () => {
      const addButtonDescription = "Add to favorites";
      const removeButtonDescription = "Remove from favorites";

      renderWithProviders(
        wrapWithRouter(
          <CharacterCard character={characterMock} loading="eager" />,
        ),
        { preloadedFavorites: [characterMock] },
      );

      const removeButton = screen.getByRole("button", {
        name: removeButtonDescription,
      });

      await act(() => {
        userEvent.click(removeButton);
      });

      await waitFor(() => {
        const addButton = screen.getByRole("button", {
          name: addButtonDescription,
        });
        expect(addButton).toBeInTheDocument();
      });
    });

    test("Then if the user clicks on the 'Remove from favorites' button, the favorites counter in header should show '0'", async () => {
      const removeButtonDescription = "Remove from favorites";

      renderWithProviders(
        <MemoryRouter initialEntries={["/home"]}>
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <CharacterCard character={characterMock} loading="eager" />
                </>
              }
            />
          </Routes>
        </MemoryRouter>,
        { preloadedFavorites: [characterMock] },
      );

      const removeButton = screen.getByRole("button", {
        name: removeButtonDescription,
      });

      await act(() => {
        userEvent.click(removeButton);
      });

      await waitFor(() => {
        const favoritesIcon = screen.getByLabelText("Show favorites");
        expect(favoritesIcon).toBeInTheDocument();
        expect(favoritesIcon).toHaveTextContent("0");
      });
    });
  });
});
