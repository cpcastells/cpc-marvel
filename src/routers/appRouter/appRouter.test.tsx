import { RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import appRouter from "./appRouter";

describe("Given an appRouter", () => {
  describe("When a user enters the app", () => {
    test("Then it should show the Marvel logo ", () => {
      const altText = "Marvel logo";

      render(<RouterProvider router={appRouter} />);
      const headingElement = screen.getByAltText(altText);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
