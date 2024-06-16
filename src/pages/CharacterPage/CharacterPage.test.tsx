import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/testUtils";
import CharacterPage from "./CharacterPage";

describe("Given a CharacterPage page", () => {
  describe("When it is rendered", () => {
    test("Then 'Loading...' should be displayed", () => {
      const loadingText = "Loading...";

      renderWithProviders(<CharacterPage />);
      const feedback = screen.getByText(loadingText);
      expect(feedback).toBeInTheDocument();
    });
  });
});
