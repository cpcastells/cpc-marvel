import { screen } from "@testing-library/dom";
import createMockCharacter from "../../mocks/factories/characterFactory";
import { Character } from "../../types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CharactersList from "./CharactersList";

describe("Given a CharactersList component", () => {
  describe("When it receives two characters, Spiderman and Hulk", () => {
    test("Then it should render both Spiderman and Hulk cards", () => {
      const firstCharacterName = "Spiderman";
      const secondCharacterName = "Hulk";
      const firstCharacter = createMockCharacter({ name: firstCharacterName });
      const secondCharacter = createMockCharacter({
        name: secondCharacterName,
      });
      const characters: Character[] = [firstCharacter, secondCharacter];

      renderWithProviders(
        wrapWithRouter(<CharactersList characters={characters} />),
      );
      const firstCharacterHeading = screen.getByRole("heading", {
        name: firstCharacterName,
      });
      const secondCharacterHeading = screen.getByRole("heading", {
        name: secondCharacterName,
      });

      expect(firstCharacterHeading).toBeInTheDocument();
      expect(secondCharacterHeading).toBeInTheDocument();
    });
  });
});
