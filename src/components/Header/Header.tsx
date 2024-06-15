import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites/useFavorites";

const Header = (): React.ReactElement => {
  const { favorites } = useFavorites();
  const [totalFavorites, setTotalFavorites] = useState<number>(0);

  useEffect(() => {
    const favoritesCount = favorites.length;
    setTotalFavorites(favoritesCount);
  }, [favorites]);

  return (
    <HeaderStyled>
      <Link to="/" aria-label="Link to home">
        <img
          src="/images/marvel_logo.png"
          alt="Marvel logo"
          className="header__logo"
          width={100}
          height={40}
        />
      </Link>
      <Link to="/" aria-label="Show favorites" className="header__favorites">
        <img
          src="/images/icons/heart_icon.svg"
          alt="Favorites icon"
          className="header__icon"
          width={24}
          height={24}
        />
        <span className="header__count">{totalFavorites}</span>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
