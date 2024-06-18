import { screen } from "@testing-library/dom";
import { createMockComic } from "../../mocks/factories/comicFactory";
import { renderWithProviders } from "../../utils/testUtils";
import ComicCard from "./ComicCard";

describe("Given a ComicCard component", () => {
  describe("When it receives a comic with the title 'Comic 1'", () => {
    test("Then it should display the comic's title", () => {
      const comicMock = createMockComic({ title: "Comic 1" });

      renderWithProviders(<ComicCard comic={comicMock} />);
      const comicTitle = screen.getByRole("heading", {
        name: comicMock.title,
      });

      expect(comicTitle).toBeInTheDocument();
    });

    test("Then it should display the comic's image", () => {
      const comicMock = createMockComic({ title: "Comic 1" });

      renderWithProviders(<ComicCard comic={comicMock} />);
      const comicImage = screen.getByAltText(`Image of ${comicMock.title}`);

      expect(comicImage).toBeInTheDocument();
    });

    test("Then it should display the comic's on sale date", () => {
      const comicMock = createMockComic({ title: "Comic 1" });

      renderWithProviders(<ComicCard comic={comicMock} />);
      const comicDate = screen.getByText(comicMock.onSaleDate);

      expect(comicDate).toBeInTheDocument();
    });
  });
});
