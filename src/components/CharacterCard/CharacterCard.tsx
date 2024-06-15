import { useFavorites } from "../../hooks/useFavorites/useFavorites";
import { Character } from "../../types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some((favorite) => favorite.id === character.id);

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
        {isFavorite ? (
          <button
            className="card__favorite-icon"
            aria-label="Remove from favorites"
            onClick={() => removeFavorite(character)}
          >
            <svg
              width="12"
              height="11"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.67337L7.51885 0.818504L7 0.503596L6.48115 0.818505L7 1.67337ZM13 5.31499L12.4812 6.16985L13 6.48476L13.5188 6.16985L13 5.31499ZM1 5.31499L0.481151 4.46012L0 4.75215V5.31499H1ZM1 13.1185H0V13.58L0.351203 13.8794L1 13.1185ZM13 23.3497L12.3512 24.1106L13 24.6638L13.6488 24.1106L13 23.3497ZM25 13.1185L25.6488 13.8794L26 13.58V13.1185H25ZM25 5.31499H26V4.75215L25.5188 4.46012L25 5.31499ZM19 1.67337L19.5189 0.818505L19 0.503596L18.4812 0.818504L19 1.67337ZM6.48115 2.52824L12.4812 6.16985L13.5188 4.46012L7.51885 0.818504L6.48115 2.52824ZM1.51885 6.16985L7.51885 2.52824L6.48115 0.818505L0.481151 4.46012L1.51885 6.16985ZM2 13.1185V5.31499H0V13.1185H2ZM13.6488 22.5887L1.6488 12.3575L0.351203 13.8794L12.3512 24.1106L13.6488 22.5887ZM13.6488 24.1106L25.6488 13.8794L24.3512 12.3575L12.3512 22.5887L13.6488 24.1106ZM26 13.1185V5.31499H24V13.1185H26ZM25.5188 4.46012L19.5189 0.818505L18.4812 2.52824L24.4812 6.16985L25.5188 4.46012ZM18.4812 0.818504L12.4812 4.46012L13.5188 6.16985L19.5189 2.52824L18.4812 0.818504Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
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
        )}
      </div>
      <div className="card__corner" />
    </CharacterCardStyled>
  );
};

export default CharacterCard;
