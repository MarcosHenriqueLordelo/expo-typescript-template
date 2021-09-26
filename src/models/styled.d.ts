import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      section: string;
      appBar: string;

      rating: string;

      selected: string;
      unselected: string;

      font: {
        main: string;
        light: string;
        darker: string;
      };
    };
  }
}
