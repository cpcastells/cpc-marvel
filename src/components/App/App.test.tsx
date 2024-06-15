import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Marvel logo", () => {
      const altText = "Marvel logo";

      renderWithProviders(wrapWithRouter(<App />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
