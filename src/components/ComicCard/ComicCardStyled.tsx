import styled from "styled-components";
import toRem from "../../styles/utils";

const ComicCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${toRem(12)};
  min-width: ${toRem(164)};
  height: 100%;

  @media (min-width: ${toRem(834)}) {
    min-width: ${toRem(168.53)};
  }

  @media (min-width: ${toRem(1512)}) {
    min-width: ${toRem(179.2)};
  }

  .comic {
    &__image-container {
      width: 100%;
      height: auto;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      gap: ${toRem(8)};
    }

    &__title {
      font-size: ${toRem(16)};
      font-weight: 500;
    }

    &__date {
      font-size: ${toRem(12)};
      font-weight: 400;
    }
  }
`;
export default ComicCardStyled;
