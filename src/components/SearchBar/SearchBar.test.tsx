import { screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input to write", () => {
      const handleOnChange = vi.fn();
      const query = "a";
      const totalCharacters = 1;
      const labelText = "Search a character";

      renderWithProviders(
        <SearchBar
          onChange={handleOnChange}
          query={query}
          totalCharacters={totalCharacters}
        />,
      );
      const input = screen.getByRole("textbox", { name: labelText });

      expect(input).toBeInTheDocument();
    });
  });

  describe("When the user types in the input", () => {
    test("Then it should call the onChange function", async () => {
      const labelText = "Search a character";
      const handleOnChange = vi.fn();
      const query = "";
      const newQuery = "a";
      const totalCharacters = 1;

      renderWithProviders(
        <SearchBar
          onChange={handleOnChange}
          query={query}
          totalCharacters={totalCharacters}
        />,
      );

      const input = screen.getByRole("textbox", { name: labelText });
      await userEvent.type(input, newQuery);

      expect(handleOnChange).toHaveBeenCalledWith(newQuery);
    });
  });
});
