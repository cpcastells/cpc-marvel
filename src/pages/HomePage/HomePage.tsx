import CharacterList from "../../components/CharacterList/CharacterList";
import SearchBar from "../../components/SearchBar/SearchBar";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <SearchBar />
      <CharacterList />
    </HomePageStyled>
  );
};

export default HomePage;
