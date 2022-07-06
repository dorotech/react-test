import dark from './dark';
import light from './light';

export type ThemeProps = {
  theme: {
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    backgroundColorCard: string,
  }
}

export default { dark, light };
