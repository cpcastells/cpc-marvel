import { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Character } from "../../types";
import HomePageStyled from "./HomePageStyled";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import { useFavorites } from "../../hooks/useFavorites/useFavorites";

const HomePage = (): React.ReactElement => {
  const { getCharacters } = useCharacters();
  const { favorites, isFavoritesView } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      if (isFavoritesView) {
        setCharacters(favorites);
        return;
      }

      const response = await getCharacters(searchQuery);
      if (!response) return;

      setCharacters(response.data.results);
    })();
  }, [favorites, getCharacters, isFavoritesView, searchQuery]);

  const handleSearch = async (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <HomePageStyled $isFavoritesView={isFavoritesView}>
      <h2 className="favorites-title">favorites</h2>
      <SearchBar
        onChange={handleSearch}
        query={searchQuery}
        totalCharacters={characters.length}
      />
      <CharactersList characters={characters} />
    </HomePageStyled>
  );
};

export default HomePage;
