import { renderHook, act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useCharacters from "../useCharacters";
import { GetCharactersAPIResponse } from "../../../types";

describe("Given a getCharacters function", () => {
  describe("When it is called without a query", () => {
    test("Then it should return a response with 'Spiderman' and 'Hulk'", async () => {
      const firstCharacterName = "Spiderman";
      const secondCharacterName = "Hulk";

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters());

      let response: GetCharactersAPIResponse | null;
      await act(async () => {
        response = await getCharacters("");
      });

      await waitFor(() => {
        expect(response?.data.results[0].name).toBe(firstCharacterName);
        expect(response?.data.results[1].name).toBe(secondCharacterName);
      });
    });
  });

  describe("When it is called with 'a' as query", () => {
    test("Then it should return a response with two characters", async () => {
      const firstCharacterName = "Astarion";
      const secondCharacterName = "Astaroth";

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters());

      let response: GetCharactersAPIResponse | null;
      await act(async () => {
        response = await getCharacters("a");
      });

      await waitFor(() => {
        expect(response?.data.results[0].name).toBe(firstCharacterName);
        expect(response?.data.results[1].name).toBe(secondCharacterName);
      });
    });
  });
});
