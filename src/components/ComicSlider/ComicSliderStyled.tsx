import styled from "styled-components";
import toRem from "../../styles/utils";

const ComicsSliderStyled = styled.ul`
  display: flex;
  gap: ${toRem(16)};
  width: 100%;
  max-width: ${toRem(960)};
  padding: 0 ${toRem(16)};
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${toRem(834)}) {
    padding: 0 ${toRem(48)};
  }

  @media (min-width: ${toRem(1512)}) {
    padding: 0 0 ${toRem(24)};

    &::-webkit-scrollbar {
      display: block;
      height: ${toRem(4)};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.marvelRed};
    }

    &::-webkit-scrollbar-track {
      background: #d9d9d9;
    }
  }
`;

export default ComicsSliderStyled;
