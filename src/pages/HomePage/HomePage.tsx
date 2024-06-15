import CharactersList from "../../components/CharactersList/CharactersList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Character } from "../../types";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const characters: Character[] = [];

  return (
    <HomePageStyled>
      <SearchBar />
      <CharactersList characters={characters} />
    </HomePageStyled>
  );
};

export default HomePage;
