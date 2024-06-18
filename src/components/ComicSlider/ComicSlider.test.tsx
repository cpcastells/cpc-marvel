import { screen } from "@testing-library/dom";
import { createMockComic } from "../../mocks/factories/comicFactory";
import { renderWithProviders } from "../../utils/testUtils";
import ComicSlider from "./ComicSlider";

describe("Given a ComicSlider component", () => {
  describe("When it is rendered with a list of 2 comics", () => {
    test("Then the component should display 2 ComicCard components", () => {
      const firstComic = createMockComic({ title: "Comic 1" });
      const secondComic = createMockComic({ title: "Comic 2" });

      const comics = [firstComic, secondComic];

      renderWithProviders(<ComicSlider comics={comics} />);

      const heading1 = screen.getByRole("heading", { name: firstComic.title });
      const heading2 = screen.getByRole("heading", { name: secondComic.title });
      const image1 = screen.getByAltText(`Image of ${firstComic.title}`);
      const image2 = screen.getByAltText(`Image of ${secondComic.title}`);

      expect(heading1).toBeInTheDocument();
      expect(heading2).toBeInTheDocument();
      expect(image1).toBeInTheDocument();
      expect(image2).toBeInTheDocument();
    });
  });
});
