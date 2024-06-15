import styled from "styled-components";
import toRem from "../../styles/utils";

const CharactersListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${toRem(16)};
  justify-content: center;

  .character-list {
    &__item {
      margin: ${toRem(8)};
    }
  }
`;

export default CharactersListStyled;
