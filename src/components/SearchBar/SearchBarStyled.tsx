import styled from "styled-components";
import toRem from "../../styles/utils";

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${toRem(12)} 0;

  .search-bar {
    &__container {
      display: flex;
      align-items: center;
      gap: ${toRem(12)};
      width: 100%;
      border-bottom: 1px solid black;
      padding: 0 0 ${toRem(8)} 0;
    }

    &__label {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    &__input {
      flex-grow: 1;
      outline: none;
      color: black;
      text-transform: uppercase;

      &::placeholder {
        color: lightgray;
      }
    }

    &__results {
      padding: ${toRem(12)} 0;
      font-size: ${toRem(12)};
      color: black;
    }
  }
`;

export default SearchBarStyled;
