import 'styled-components';
import { ThemeDark } from './Dark';

declare module 'styled-components' {
  type ThemeType = typeof ThemeDark;

  export interface DefaultTheme extends ThemeType {}
}
