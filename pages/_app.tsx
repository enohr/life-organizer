import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/index.css';
import Nav from '../components/nav';
import { ProtectRoutes } from '../lib/ProtectRoutes';
import { AuthProvider } from '../lib/useUser';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Nav />
      <AuthProvider>
        <ProtectRoutes>
          <Component {...pageProps} />
        </ProtectRoutes>
      </AuthProvider>
    </>
  );
}

export default MyApp;
