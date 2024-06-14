import { render, screen } from "@testing-library/react";
import App from "./App";
import wrapWithRouter from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Marvel logo", () => {
      const altText = "Marvel logo";

      render(wrapWithRouter(<App />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
