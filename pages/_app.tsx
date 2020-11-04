import { Provider } from 'next-auth/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  console.log(pageProps);
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
