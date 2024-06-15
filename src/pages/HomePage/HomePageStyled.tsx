import styled, { css } from "styled-components";
import toRem from "../../styles/utils";

interface HomePageStyledProps {
  $isFavoritesView: boolean;
}

const HomePageStyled = styled.main<HomePageStyledProps>`
  display: flex;
  flex-direction: column;
  gap: ${toRem(24)};
  padding: ${toRem(24)} ${toRem(16)};
  text-transform: uppercase;
  transition: padding 0.5s ease;

  .favorites-title {
    font-size: ${toRem(24)};
    color: #000;
    font-weight: 700;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition:
      opacity 0.5s ease-in-out,
      height 0.3s ease-in-out;

    ${({ $isFavoritesView }) =>
      $isFavoritesView &&
      css`
        opacity: 1;
        height: ${toRem(32)};
      `}
  }

  @media (min-width: 834px) {
    padding: ${toRem(48)};
  }
`;

export default HomePageStyled;
