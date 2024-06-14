import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then 'My Marvel' should be in the document", () => {
      const heading = "My Marvel";

      render(<App />);
      const headingElement = screen.getByRole("heading", { name: heading });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
