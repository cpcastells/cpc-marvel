import { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Character } from "../../types";
import HomePageStyled from "./HomePageStyled";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import { useFavorites } from "../../hooks/useFavorites/useFavorites";
import LoaderBar from "../../components/LoaderBar/LoaderBar";
import useDebounce from "../../hooks/useDebounce/useDebounce";

const HomePage = (): React.ReactElement => {
  const { getCharacters, areCharactersLoading } = useCharacters();
  const { favorites, isFavoritesView } = useFavorites();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [inputQuery, setInputQuery] = useState("");
  const searchQuery = useDebounce(inputQuery, 500);

  useEffect(() => {
    if (isFavoritesView) {
      setCharacters(
        favorites.filter((character) =>
          character.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    }
  }, [favorites, isFavoritesView, searchQuery]);

  useEffect(() => {
    if (!isFavoritesView) {
      (async () => {
        const response = await getCharacters(searchQuery);
        if (response) {
          setCharacters(response.data.results);
        }
      })();
    }
  }, [getCharacters, isFavoritesView, searchQuery]);

  const handleSearch = async (searchQuery: string) => {
    setInputQuery(searchQuery);
  };

  return (
    <HomePageStyled $isFavoritesView={isFavoritesView}>
      <LoaderBar isLoading={areCharactersLoading} />
      <h2 className="favorites-title">favorites</h2>
      <SearchBar
        onChange={handleSearch}
        query={inputQuery}
        totalCharacters={characters.length}
      />
      <CharactersList characters={characters} />
    </HomePageStyled>
  );
};

export default HomePage;
