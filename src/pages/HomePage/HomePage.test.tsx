import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the search bar input", () => {
      const labelText = "Search a character";

      renderWithProviders(wrapWithRouter(<HomePage />));
      const input = screen.getByRole("textbox", { name: labelText });

      expect(input).toBeInTheDocument();
    });
  });
});
