import axios from "axios";
import { GetCharactersAPIResponse } from "../../types";
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

  return { getCharacters };
};

export default useCharacters;
