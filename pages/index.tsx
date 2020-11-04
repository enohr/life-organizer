import { NextPage } from 'next';
import { session, signIn, signOut, useSession } from 'next-auth/client';
import Nav from '../components/nav';

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();

  return (
    <div>
      <Nav />
      {!session && (
        <div className="text-xl">
          <p>Not signed</p>
          <button onClick={() => signIn('credentials')}>Sign in</button>
        </div>
      )}
      {session && (
        <div className="text-xl">
          <p>Signed in as {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
