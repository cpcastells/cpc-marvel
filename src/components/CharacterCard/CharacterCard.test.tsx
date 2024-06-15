import { screen } from "@testing-library/react";
import createMockCharacter from "../../mocks/factories/characterFactory";
import CharacterCard from "./CharacterCard";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a CharacterCard component", () => {
  describe("When it receives a character with the name 'Spiderman'", () => {
    const characterMock = createMockCharacter({ name: "Spiderman" });

    test("Then it should display the character's name", () => {
      renderWithProviders(
        wrapWithRouter(<CharacterCard character={characterMock} />),
      );
      const characterName = screen.getByRole("heading", {
        name: characterMock.name,
      });

      expect(characterName).toBeInTheDocument();
    });

    test("Then it should display the character's image", () => {
      renderWithProviders(
        wrapWithRouter(<CharacterCard character={characterMock} />),
      );
      const characterImage = screen.getByAltText(
        `Image of ${characterMock.name}`,
      );

      expect(characterImage).toBeInTheDocument();
    });

    test("Then it should display a add to favorites button", () => {
      const buttonDescription = "Add to favorites";

      renderWithProviders(
        wrapWithRouter(<CharacterCard character={characterMock} />),
      );
      const favoriteButton = screen.getByRole("button", {
        name: buttonDescription,
      });

      expect(favoriteButton).toBeInTheDocument();
    });
  });
});
