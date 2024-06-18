import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterPageStyled from "./CharacterPageStyled";
import { useFavorites } from "../../hooks/useFavorites/useFavorites";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import { Character, Comic } from "../../types";
import SolidFavoriteIcon from "../../components/icons/SolidFavoriteIcon";
import UnselectedFavoriteIcon from "../../components/icons/UnselectedFavoriteIcon";
import LoaderBar from "../../components/LoaderBar/LoaderBar";
import { secureUrl } from "../../utils/utils";
import ComicsSlider from "../../components/ComicSlider/ComicSlider";

const CharacterPage = () => {
  const { characterId } = useParams();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { getCharacterById, getComicsByCharacter, isCharacterByIdLoading } =
    useCharacters();
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Comic[]>([]);
  const isFavorite = favorites.some((fav) => fav.id === Number(characterId!));

  useEffect(() => {
    (async () => {
      if (!characterId) {
        return;
      }
      const fetchedCharacter = await getCharacterById(characterId);

      if (!fetchedCharacter) {
        return;
      }
      setCharacter(fetchedCharacter);
      const fetchedComics = await getComicsByCharacter(
        fetchedCharacter.comics.items,
      );
      setComics(fetchedComics);
    })();
  }, [characterId, getCharacterById, getComicsByCharacter]);

  return (
    <CharacterPageStyled>
      <LoaderBar isLoading={isCharacterByIdLoading} />
      {!isCharacterByIdLoading && character && (
        <article className="character-detail">
          <header className="character-detail__header">
            <div className="character-detail__header-content">
              <img
                src={`${secureUrl(character.thumbnail.path)}/detail.${character.thumbnail.extension}`}
                alt={`Image of ${character.name}`}
                className="character-detail__image"
              />
              <div className="character-detail__info">
                <div className="character-detail__header-row">
                  <h1 className="character-detail__name">{character.name}</h1>
                  <button
                    className="character-detail__favorite"
                    aria-label={
                      isFavorite ? "Remove from favorites" : "Add to favorites"
                    }
                    onClick={() => {
                      isFavorite
                        ? removeFavorite(character)
                        : addFavorite(character);
                    }}
                  >
                    <SolidFavoriteIcon
                      height={24}
                      width={22}
                      className={`heart-icon ${isFavorite ? "heart-icon--active" : ""}`}
                    />
                    <UnselectedFavoriteIcon
                      height={24}
                      width={22}
                      className={`heart-icon ${!isFavorite ? "heart-icon--active" : ""}`}
                    />
                  </button>
                </div>
                <p className="character-detail__description">
                  {character.description || "No description available."}
                </p>
                <div className="character-detail__corner" />
              </div>
            </div>
          </header>
          <section className="character-detail__comics">
            <h2>Comics</h2>
            <ComicsSlider comics={comics} />
          </section>
        </article>
      )}
    </CharacterPageStyled>
  );
};

export default CharacterPage;
