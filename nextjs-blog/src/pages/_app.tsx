import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { darkTheme } from 'my-app/lib/theme';

import 'my-app/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
