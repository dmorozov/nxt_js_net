import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { RecoilLogger } from 'recoil-devtools-logger';
import { ThemeProvider } from 'styled-components';

import '@app/styles/global.css';
import { darkTheme } from '@app/styles/theme';

const DEBUG_ENABLED = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>
        {process.env.NODE_ENV === `development` && DEBUG_ENABLED && <RecoilLogger />}
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}
