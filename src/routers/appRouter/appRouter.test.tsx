import { RouterProvider } from "react-router-dom";
import { screen } from "@testing-library/react";
import appRouter from "./appRouter";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given an appRouter", () => {
  describe("When a user enters the app", () => {
    test("Then it should show the Marvel logo ", () => {
      const altText = "Marvel logo";

      renderWithProviders(<RouterProvider router={appRouter} />);
      const headingElement = screen.getByAltText(altText);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
