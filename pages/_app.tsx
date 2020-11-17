import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/index.css';
import Nav from '../components/nav';
import { ProtectRoutes } from '../lib/ProtectRoutes';
import { AuthProvider } from '../context/user';
import { ToastProvider } from '../context/toast';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <AuthProvider>
        <Nav />
        <ProtectRoutes>
          <Head>
            <title>Life Organizer</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </ProtectRoutes>
      </AuthProvider>
    </ToastProvider>
  );
}

export default MyApp;
