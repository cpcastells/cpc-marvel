import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import wrapWithRouter from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Marvel logo", () => {
      const altText = "Marvel logo";

      render(wrapWithRouter(<Layout />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
