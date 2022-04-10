import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BaseComponent from '@components/BaseComponent';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseComponent>
      <Component {...pageProps} />
    </BaseComponent>
  );
}

export default MyApp;
