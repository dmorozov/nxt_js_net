import { ThemeProvider } from 'styled-components';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { darkTheme } from 'lib/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
