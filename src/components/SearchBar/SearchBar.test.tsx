import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input to write", () => {
      const labelText = "Search a character";

      render(<SearchBar />);
      const input = screen.getByRole("textbox", { name: labelText });

      expect(input).toBeInTheDocument();
    });
  });
});
