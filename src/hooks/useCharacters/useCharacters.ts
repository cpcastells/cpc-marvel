import axios from "axios";
import { Character, GetCharactersAPIResponse } from "../../types";
import { useCallback, useState } from "react";

const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_PUBLIC_KEY;

const useCharacters = () => {
  const [areCharactersLoading, setAreCharactersLoading] = useState(false);
  const [isCharacterByIdLoading, setIsCharacterByIdLoading] = useState(false);

  const getCharacters = useCallback(
    async (query: string): Promise<GetCharactersAPIResponse | null> => {
      setAreCharactersLoading(true);

      try {
        let url = `${apiURL}/public/characters?limit=50&apikey=${apiKey}`;
        if (query) {
          url += `&nameStartsWith=${query}`;
        }

        const response = await axios.get<GetCharactersAPIResponse>(url);
        return response.data;
      } catch (error) {
        return null;
      } finally {
        setAreCharactersLoading(false);
      }
    },
    [],
  );

  const getCharacterById = useCallback(
    async (characterId: string): Promise<Character | null> => {
      setIsCharacterByIdLoading(true);

      try {
        const url = `${apiURL}/public/characters/${characterId}?apikey=${apiKey}`;

        const response = await axios.get<GetCharactersAPIResponse>(url);
        return response.data.data.results[0];
      } catch (error) {
        return null;
      } finally {
        setIsCharacterByIdLoading(false);
      }
    },
    [],
  );

  return {
    getCharacters,
    getCharacterById,
    isCharacterByIdLoading,
    areCharactersLoading,
  };
};

export default useCharacters;
