import styled from "styled-components";
import toRem from "../../styles/utils";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${toRem(16)};
  background-color: black;
  transition: padding 0.5s ease;

  @media (min-width: ${toRem(834)}) {
    padding: ${toRem(16)} ${toRem(48)};
  }

  .header {
    &__logo {
      width: ${toRem(100)};
    }

    &__favorites {
      display: flex;
      gap: ${toRem(8)};
      align-items: center;
      position: relative;
      cursor: pointer;
    }

    &__icon {
      width: ${toRem(24)};
      height: ${toRem(24)};
      fill: ${({ theme }) => theme.colors.marvelRed};
    }

    &__count {
      color: white;
      font-size: ${toRem(18)};
      top: ${toRem(-8)};
      right: ${toRem(-12)};
    }
  }
`;

export default HeaderStyled;
