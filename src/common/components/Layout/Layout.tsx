import { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import useLocalStorage from 'react-use/lib/useLocalStorage';

import { Header } from '@common/components/Layout/components/Header';
import { darkTheme, theme, themeSelector } from '@common/utils/themeSelector';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background: ${themeSelector.background};
    color: ${themeSelector.color};
    transition-property: color, background-color;
    transition-duration: 300ms;
  }

  body {
    height: 100%;
  }
  
  #app {
    height: 100%;
  }
`;

export const Layout: FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('theme', false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <Normalize />
      <GlobalStyle />
      <Header switchTheme={() => setIsDarkTheme(!isDarkTheme)} />
      <main>{children}</main>
    </ThemeProvider>
  );
};
