import styled from "styled-components";
import toRem from "../../styles/utils";

const CharacterCardStyled = styled.article`
  position: relative;
  width: ${toRem(172.5)};
  transition: transform 0.5s;
  background-color: black;

  @media (min-width: 1512px) {
    width: ${toRem(188.57)};
  }

  &:hover .card__name-container:before {
    top: ${toRem(-5.38)};
    height: calc(100% + ${toRem(5.38)});
  }

  &:hover .card__favorite-icon .heart-icon {
    fill: white;
  }

  .card {
    &__image-container {
      width: 100%;
      height: ${toRem(189.97)};
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name-container {
      position: relative;
      height: ${toRem(56)};
      padding: ${toRem(16)} ${toRem(16)} ${toRem(24)} ${toRem(16)};
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;

      &:before {
        content: "";
        position: absolute;
        top: ${toRem(-5.38)};
        left: 0;
        height: ${toRem(5.38)};
        width: 100%;
        background: ${(props) => props.theme.colors.marvelRed};
        transition: all 0.5s;
        z-index: -1;
      }

      .heart-icon {
        fill: ${(props) => props.theme.colors.marvelRed};
        transition: fill 0.5s;
      }
    }

    &__name {
      margin: 0;
      font-size: ${toRem(16)};
      transition: color 0.5s;
    }

    &__favorite-icon {
      cursor: pointer;
    }

    &__corner {
      position: absolute;
      bottom: ${toRem(-1)};
      right: ${toRem(-1)};
      width: ${toRem(12.86)};
      height: ${toRem(12.86)};
      background-color: white;
      clip-path: polygon(100% 0, 0 100%, 100% 100%);
      z-index: 2;
    }
  }
`;

export default CharacterCardStyled;
