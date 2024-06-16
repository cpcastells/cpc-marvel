import styled from "styled-components";
import toRem from "../../styles/utils";

const CharacterPageStyled = styled.main`
  .character-detail {
    &__header {
      width: 100%;
      background-color: black;
      position: relative;
    }

    &__header-content {
      max-width: ${toRem(960)};
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: ${toRem(768)}) {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    &__image {
      width: ${toRem(393)};
      height: ${toRem(397.89)};
      object-fit: cover;
      object-position: left;

      @media (min-width: ${toRem(768)}) {
        width: ${toRem(278)};
        height: ${toRem(278)};
      }

      @media (min-width: ${toRem(1512)}) {
        width: ${toRem(320)};
        height: ${toRem(320)};
      }
    }

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${toRem(24)};
      padding: ${toRem(24)} ${toRem(16)} ${toRem(48)} ${toRem(16)};

      @media (min-width: ${toRem(768)}) {
        align-items: flex-start;
        padding: ${toRem(48)};
      }

      @media (min-width: ${toRem(1512)}) {
        padding: ${toRem(48)} 0 ${toRem(48)} ${toRem(48)};
      }
    }

    &__header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: ${toRem(361)};
      @media (min-width: ${toRem(768)}) {
        max-width: 100%;
      }
    }

    &__name {
      font-size: ${toRem(32)};
      font-weight: 700;
      text-transform: uppercase;
      color: white;
    }

    &__favorite {
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      position: relative;
      width: ${toRem(24)};
      height: ${toRem(24)};

      .heart-icon {
        position: absolute;
        top: 0;
        left: 0;
        fill: ${(props) => props.theme.colors.marvelRed};
        transition: opacity 0.3s ease-in-out;
      }

      .heart-icon--active {
        opacity: 1;
      }

      .heart-icon:not(.heart-icon--active) {
        opacity: 0;
      }
    }

    &__description {
      font-size: ${toRem(16)};
      color: white;
    }

    &__corner {
      position: absolute;
      bottom: 0;
      right: 0;
      width: ${toRem(24)};
      height: ${toRem(24)};
      background-color: white;
      clip-path: polygon(100% 0, 0 100%, 100% 100%);
      z-index: 1;
    }

    &__comics {
      padding: ${toRem(24)};
      max-width: ${toRem(960)};
      margin: 0 auto;
      background-color: white;

      h2 {
        font-size: ${toRem(24)};
        margin-bottom: ${toRem(20)};
      }
    }
  }
`;

export default CharacterPageStyled;
