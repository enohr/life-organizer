import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/index.css';
import { AuthProvider, ProtectRoute } from '../api/context/auth';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
