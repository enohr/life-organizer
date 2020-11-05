import { NextPage } from 'next';
import Nav from '../components/nav';
import useUser from '../lib/useUser';

const IndexPage: NextPage = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
    </div>
  );
};

export default IndexPage;
