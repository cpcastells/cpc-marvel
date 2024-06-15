import { useFavorites } from "../../hooks/useFavorites/useFavorites";
import { Character } from "../../types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { addFavorite } = useFavorites();

  return (
    <CharacterCardStyled>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`Image of ${character.name}`}
        className="card__image"
        width={173}
        height={173}
      />
      <div className="card__name-container">
        <h3 className="card__name">{character.name}</h3>
        <button
          className="card__favorite-icon"
          aria-label="Add to favorites"
          onClick={() => addFavorite(character)}
        >
          <svg
            width="12"
            height="11"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.80933L6 0.167709L0 3.80933V11.6128L12 21.844L24 11.6128V3.80933L18 0.167709L12 3.80933Z"
              className="heart-icon"
            />
          </svg>
        </button>
      </div>
      <div className="card__corner" />
    </CharacterCardStyled>
  );
};

export default CharacterCard;
