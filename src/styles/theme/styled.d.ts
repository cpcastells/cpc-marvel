import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };

    colors: {
      background: string;
      marvelRed: string;
    };
  }
}
