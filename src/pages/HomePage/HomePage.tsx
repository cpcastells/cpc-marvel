import SearchBar from "../../components/SearchBar/SearchBar";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <SearchBar />
    </HomePageStyled>
  );
};

export default HomePage;
