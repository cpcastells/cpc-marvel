import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    
  }

  html {
    font-family: ${(props) => props.theme.fonts.primary};
    -webkit-appearance: none;
    appearance: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.background}; 
    color: ${(props) => props.theme.colors.background}; 
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    font: inherit;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  input {
    border: none;
    padding: 0;
    background: none;
    font: inherit;
  }
`;
