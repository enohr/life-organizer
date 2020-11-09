import { NextPage } from 'next';
import { useUser } from '../lib/useUser';
import Image from 'next/image';

const IndexPage: NextPage = () => {
  const { user } = useUser();
  return (
    <div className="container h-screen mx-auto flex items-center flex-col">
      <Image src="/undraw_schedule_pnbk 1.svg" width={500} height={500} />
      <h1>Precisando organizar o seu dia-a-dia?</h1>
      <h2>O projeto Life Organizer surgiu para isso!</h2>
    </div>
  );
};

export default IndexPage;
