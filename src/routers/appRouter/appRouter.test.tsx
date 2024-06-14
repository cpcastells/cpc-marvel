import { RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import appRouter from "./appRouter";

describe("Given an appRouter", () => {
  describe("When a user enters the app", () => {
    test("Then should see the heading 'My Marvel' ", () => {
      const heading = "My Marvel";

      render(<RouterProvider router={appRouter} />);
      const headingElement = screen.getByRole("heading", { name: heading });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
