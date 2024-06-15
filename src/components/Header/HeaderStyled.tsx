import styled from "styled-components";
import toRem from "../../styles/utils";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${toRem(16)} ${toRem(48)};
  background-color: black;

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
