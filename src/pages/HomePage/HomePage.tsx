import { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Character } from "../../types";
import HomePageStyled from "./HomePageStyled";
import useCharacters from "../../hooks/useCharacters/useCharacters";

const HomePage = (): React.ReactElement => {
  const { getCharacters } = useCharacters();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getCharacters("");
      if (!response) return;

      setCharacters(response.data.results);
    })();
  }, [getCharacters]);

  return (
    <HomePageStyled>
      <SearchBar />
      <CharactersList characters={characters} />
    </HomePageStyled>
  );
};

export default HomePage;
