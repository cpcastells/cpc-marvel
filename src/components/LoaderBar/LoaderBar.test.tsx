import LoaderBar from "./LoaderBar";
import { renderWithProviders } from "../../utils/testUtils";
import { screen } from "@testing-library/dom";

describe("Given a LoaderBar component", () => {
  const labelText = "Loading bar";

  describe("When the the state isLoading is true", () => {
    test("Then it should appear on the page", () => {
      renderWithProviders(<LoaderBar isLoading />);
      const loadingBar = screen.getByLabelText(labelText);

      expect(loadingBar).toBeInTheDocument();
      expect(loadingBar).toHaveStyle("width: 100%");
    });
  });

  describe("When the the state isLoading is false", () => {
    test("Then it should not appear on the page", () => {
      renderWithProviders(<LoaderBar isLoading={false} />);
      const loadingBar = screen.queryByLabelText(labelText);

      expect(loadingBar).toBeInTheDocument();
      expect(loadingBar).toHaveStyle("width: 0");
    });
  });
});
