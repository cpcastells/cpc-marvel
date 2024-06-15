import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharactersListStyled from "./CharactersListStyled";

interface CharactersListProps {
  characters: Character[];
}

const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <CharactersListStyled>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </CharactersListStyled>
  );
};

export default CharactersList;
