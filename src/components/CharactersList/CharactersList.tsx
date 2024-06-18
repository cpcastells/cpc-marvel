import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharactersListStyled from "./CharactersListStyled";

interface CharactersListProps {
  characters: Character[];
}

const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <CharactersListStyled>
      {characters.map((character, index) => (
        <li key={character.id}>
          <CharacterCard
            character={character}
            loading={index <= 10 ? "eager" : "lazy"}
          />
        </li>
      ))}
    </CharactersListStyled>
  );
};

export default CharactersList;
