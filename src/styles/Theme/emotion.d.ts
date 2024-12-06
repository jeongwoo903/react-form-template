import '@emotion/react';
import CustomTheme from 'styles/Theme';

type CustomThemeType = typeof CustomTheme;

declare module '@emotion/react' {
  export interface Theme extends CustomThemeType {}
}
