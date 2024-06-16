import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites/useFavorites";
import { Character } from "../../types";
import SolidFavoriteIcon from "../icons/SolidFavoriteIcon";
import UnselectedFavoriteIcon from "../icons/UnselectedFavoriteIcon";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some((favorite) => favorite.id === character.id);

  return (
    <CharacterCardStyled>
      <div className="card__image-container">
        <Link to={`/character/${character.id}`} className="card__link">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={`Image of ${character.name}`}
            className="card__image"
            width={173}
            height={173}
          />
        </Link>
      </div>
      <div className="card__name-container">
        <h3 className="card__name">{character.name}</h3>
        {isFavorite ? (
          <button
            className="card__favorite-icon"
            aria-label="Remove from favorites"
            onClick={() => removeFavorite(character)}
          >
            <SolidFavoriteIcon height={12} width={11} className="heart-icon" />
          </button>
        ) : (
          <button
            className="card__favorite-icon"
            aria-label="Add to favorites"
            onClick={() => addFavorite(character)}
          >
            <UnselectedFavoriteIcon height={12} width={11} />
          </button>
        )}
      </div>
      <div className="card__corner" />
    </CharacterCardStyled>
  );
};

export default CharacterCard;
