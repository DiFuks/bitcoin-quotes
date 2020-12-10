import { ThemeProps } from 'styled-components';

export const theme = {
  background: '#ffffff',
  backgroundSecondary: '#f3f3f3',
  color: '#000000',
};

export const darkTheme: typeof theme = {
  background: '#24292e',
  backgroundSecondary: '#242424',
  color: '#d6d8da',
};

export type IThemedProps = ThemeProps<typeof theme>;

export const themeSelector = {
  background: (props: IThemedProps): string => props.theme.background,
  backgroundSecondary: (props: IThemedProps): string =>
    props.theme.backgroundSecondary,
  color: (props: IThemedProps): string => props.theme.color,
};
