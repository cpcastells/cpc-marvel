import { render, screen } from "@testing-library/react";
import Header from "./Header";
import wrapWithRouter from "../../utils/testUtils";

describe("Given a Headertest component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Marvel logo", () => {
      const altText = "Marvel logo";

      render(wrapWithRouter(<Header />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show the favorites icon", () => {
      const altText = "Favorites icon";

      render(wrapWithRouter(<Header />));
      const icon = screen.getByAltText(altText);

      expect(icon).toBeInTheDocument();
    });
  });
});
