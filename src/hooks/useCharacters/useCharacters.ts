import axios from "axios";
import {
  Character,
  GetCharactersAPIResponse,
  GetComicAPIResponse,
  Comic,
} from "../../types";
import { useCallback, useState } from "react";
import { secureImageUrl } from "../../utils/utils";

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

  const getComicsByCharacter = useCallback(
    async (comics: { resourceURI: string }[]): Promise<Comic[]> => {
      try {
        const comicsPromises = comics.slice(0, 20).map((comic) => {
          const comicUrl = `${comic.resourceURI}?apikey=${apiKey}`;
          return axios
            .get<GetComicAPIResponse>(comicUrl)
            .then((response) => response.data.data.results[0]);
        });

        const comicsData = await Promise.all(comicsPromises);
        return comicsData.map((comic) => {
          const onSaleDate = comic.dates.find(
            (date) => date.type === "onsaleDate",
          );
          return {
            comicId: comic.id,
            title: comic.title,
            thumbnail: secureImageUrl(
              `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`,
            ),
            onSaleDate: new Date(onSaleDate!.date).getFullYear().toString(),
          };
        });
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    [],
  );

  return {
    getCharacters,
    getCharacterById,
    getComicsByCharacter,
    isCharacterByIdLoading,
    areCharactersLoading,
  };
};

export default useCharacters;
