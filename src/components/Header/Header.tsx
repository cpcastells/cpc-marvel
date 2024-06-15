import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
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
        <span className="header__count">2</span>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
