import { act, renderHook, waitFor } from "@testing-library/react";
import useCharacters from "../useCharacters";
import { Comic } from "../../../types";

const apiURL = import.meta.env.VITE_API_URL;

describe("Given a getComicsByCharacter function", () => {
  describe("When it is called with a list of comics", () => {
    test("Then it should return the comics sorted by onSaleDate", async () => {
      const comics = [
        { resourceURI: `${apiURL}/public/comics/2020` },
        { resourceURI: `${apiURL}/public/comics/2012` },
        { resourceURI: `${apiURL}/public/comics/1998` },
      ];

      const {
        result: {
          current: { getComicsByCharacter },
        },
      } = renderHook(() => useCharacters());

      let response: Comic[] | undefined;
      await act(async () => {
        response = await getComicsByCharacter(comics);
      });

      await waitFor(() => {
        expect(response).toBeDefined();
        if (response) {
          expect(response[0].title).toBe("Comic 1998");
          expect(response[1].title).toBe("Comic 2012");
          expect(response[2].title).toBe("Comic 2020");
        }
      });
    });
  });

  describe("When it is called with an empty list", () => {
    test("Then it should return an empty array", async () => {
      const comics: { resourceURI: string }[] = [];

      const {
        result: {
          current: { getComicsByCharacter },
        },
      } = renderHook(() => useCharacters());

      let response: Comic[];
      await act(async () => {
        response = await getComicsByCharacter(comics);
      });

      await waitFor(() => {
        expect(response).toEqual([]);
      });
    });
  });
});
