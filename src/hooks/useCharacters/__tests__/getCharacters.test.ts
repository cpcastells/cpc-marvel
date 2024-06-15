import { renderHook } from "@testing-library/react";
import useCharacters from "../useCharacters";

describe("Given a getCharacters function", () => {
  describe("When it is called without no query", () => {
    test("Then it should return a response with 'Spiderman' and 'Hulk'", async () => {
      const firstCharacterName = "Spiderman";
      const secondCharacterName = "Hulk";

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters());

      const response = await getCharacters("");

      expect(response?.data.results[0].name).toBe(firstCharacterName);
      expect(response?.data.results[1].name).toBe(secondCharacterName);
    });
  });

  describe("When it is called with an 'a' as query", () => {
    test("Then it should return a response with two characters", async () => {
      const firstCharacterName = "Astarion";
      const secondCharacterName = "Astaroth";

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters());

      const response = await getCharacters("a");

      expect(response?.data.results[0].name).toBe(firstCharacterName);
      expect(response?.data.results[1].name).toBe(secondCharacterName);
    });
  });
});
