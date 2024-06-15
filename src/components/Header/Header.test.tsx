import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Headertest component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Marvel logo", () => {
      const altText = "Marvel logo";

      renderWithProviders(wrapWithRouter(<Header />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show the favorites icon", () => {
      const altText = "Favorites icon";

      renderWithProviders(wrapWithRouter(<Header />));
      const icon = screen.getByAltText(altText);

      expect(icon).toBeInTheDocument();
    });
  });
});
