import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then 'My Marvel' should be in the document", () => {
      const heading = "My Marvel";

      render(<Layout />);

      const headingElement = screen.getByRole("heading", { name: heading });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
