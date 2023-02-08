import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '@app/styles/global.css';
import { darkTheme } from '@app/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
