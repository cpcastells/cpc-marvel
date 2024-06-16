import axios from "axios";
import { Character, GetCharactersAPIResponse } from "../../types";
import { useCallback } from "react";

const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_PUBLIC_KEY;

const useCharacters = () => {
  const getCharacters = useCallback(
    async (query: string): Promise<GetCharactersAPIResponse | null> => {
      try {
        let url = `${apiURL}/public/characters?limit=50&apikey=${apiKey}`;
        if (query) {
          url += `&nameStartsWith=${query}`;
        }

        const response = await axios.get<GetCharactersAPIResponse>(url);
        return response.data;
      } catch (error) {
        return null;
      }
    },
    [],
  );

  const getCharacterById = useCallback(
    async (characterId: string): Promise<Character | null> => {
      try {
        const url = `${apiURL}/public/characters/${characterId}?apikey=${apiKey}`;

        const response = await axios.get<GetCharactersAPIResponse>(url);
        return response.data.data.results[0];
      } catch (error) {
        return null;
      }
    },
    [],
  );

  return { getCharacters, getCharacterById };
};

export default useCharacters;
