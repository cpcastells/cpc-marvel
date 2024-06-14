import styled from "styled-components";
import toRem from "../../styles/utils";

const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${toRem(24)};
  padding: ${toRem(24)} ${toRem(16)};
  text-transform: uppercase;

  @media (min-width: 834px) {
    padding: ${toRem(48)};
  }
`;

export default HomePageStyled;
