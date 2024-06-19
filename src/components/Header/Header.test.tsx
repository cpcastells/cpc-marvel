import { screen, waitFor } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import { act } from "react";
import CharacterPage from "../../pages/CharacterPage/CharacterPage";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Marvel logo", () => {
      const logoAltText = "Marvel logo";

      renderWithProviders(wrapWithRouter(<Header />));
      const logo = screen.getByAltText(logoAltText);

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show the favorites icon", () => {
      const favoritesIconLabelText = "Favorites icon";

      renderWithProviders(wrapWithRouter(<Header />));
      const icon = screen.getByLabelText(favoritesIconLabelText);

      expect(icon).toBeInTheDocument();
    });
  });

  describe("When the user is on the character page of Spiderman and clicks on the Marvel logo", () => {
    test("Then it should redirect to the home page", async () => {
      const logoAltText = "Marvel logo";
      const searchLabelText = "Search a character";

      renderWithProviders(
        <MemoryRouter initialEntries={["/character/1234"]}>
          <Routes>
            <Route
              path="/character/:characterId"
              element={
                <>
                  <Header />
                  <CharacterPage />
                </>
              }
            />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </MemoryRouter>,
      );

      act(() => {
        const logo = screen.getByAltText(logoAltText);
        userEvent.click(logo);
      });

      await waitFor(() => {
        const input = screen.getByRole("textbox", { name: searchLabelText });
        expect(input).toBeInTheDocument();
      });
    });
  });

  describe("When the user is on the Spiderman character page and clicks on the favorites icon", () => {
    test("Then it should redirect to favorites view of the home page", async () => {
      const favoritesLinkLabelText = "Show favorites";
      const searchLabelText = "Search a character";
      const favoritesViewHeadertext = "favorites";

      renderWithProviders(
        <MemoryRouter initialEntries={["/character/1234"]}>
          <Routes>
            <Route
              path="/character/:characterId"
              element={
                <>
                  <Header />
                  <CharacterPage />
                </>
              }
            />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </MemoryRouter>,
      );

      act(() => {
        const link = screen.getByRole("link", { name: favoritesLinkLabelText });
        userEvent.click(link);
      });

      await waitFor(() => {
        const input = screen.getByRole("textbox", { name: searchLabelText });
        const header = screen.getByRole("heading", {
          name: favoritesViewHeadertext,
        });

        expect(input).toBeInTheDocument();
        expect(header).toBeInTheDocument();
      });
    });
  });
});
