import styled from "styled-components";
import toRem from "../../styles/utils";

interface LoaderBarProps {
  $isLoading: boolean;
}

const LoaderBarStyled = styled.div<LoaderBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.4s ease-in-out;
  height: ${toRem(5.38)};
  background-color: ${(props) => props.theme.colors.marvelRed};
  width: ${(props) => (props.$isLoading ? "100%" : "0")};
  opacity: ${(props) => (props.$isLoading ? 1 : 0)};
`;

export default LoaderBarStyled;
