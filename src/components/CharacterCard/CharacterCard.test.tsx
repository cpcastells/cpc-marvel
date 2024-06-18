import { screen } from "@testing-library/react";
import createMockCharacter from "../../mocks/factories/characterFactory";
import CharacterCard from "./CharacterCard";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

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
  });
});
