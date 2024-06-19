import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites/useFavorites";
import SolidFavoriteIcon from "../icons/SolidFavoriteIcon";

const Header = (): React.ReactElement => {
  const { favorites, showFavoritesView, hideFavoritesView } = useFavorites();
  const [totalFavorites, setTotalFavorites] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const favoritesCount = favorites.length;
    setTotalFavorites(favoritesCount);
  }, [favorites]);

  const handleShowFavorites = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    showFavoritesView();
    if (location.pathname !== "/home") {
      navigate("/");
    }
  };

  const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    hideFavoritesView();
    if (location.pathname !== "/home") {
      navigate("/home");
    }
  };

  return (
    <HeaderStyled>
      <Link to="/home" aria-label="Link to home" onClick={handleGoHome}>
        <img
          src="/images/marvel_logo.png"
          alt="Marvel logo"
          className="header__logo"
          width={100}
          height={40}
        />
      </Link>
      <Link
        to="/home"
        aria-label="Show favorites"
        className="header__favorites"
        onClick={handleShowFavorites}
      >
        <SolidFavoriteIcon width={24} height={22} className="header__icon" />
        <span className="header__count">{totalFavorites}</span>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
