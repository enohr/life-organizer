import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <div className="container max-w-full h-full ">
      <div className="w-full mx-auto flex items-center flex-col shadow-lg pb-16">
        <Image src="/undraw_schedule_pnbk 1.svg" width={500} height={500} />
        <h1 className="font-bold text-5xl">
          Precisando organizar o seu dia-a-dia?
        </h1>
        <h2 className="text-2xl text-gray-800">
          O projeto Life Organizer surgiu para isso!
        </h2>
        <Link href="/signup">
          <a className="mt-8 btn-blue p-3 ">Crie sua conta</a>
        </Link>
      </div>

      <div className="flex w-full flex-col text-center my-8 py-4 font-bold shadow-lg pb-16">
        <h2 className="text-2xl font-boldtext-gray-800">
          Com o Life Organizer você pode:
        </h2>
        <div className="flex justify-evenly w-full">
          <div>
            <Image src="/calendar_events.svg" width={300} height={300} />
            <p className="text-2xltext-gray-800">Criar sua rotina</p>
          </div>

          <div>
            <Image src="/calendar_checkbox.svg" width={300} height={300} />
            <p className="text-2xltext-gray-800">Definir seus objetivos</p>
          </div>

          <div>
            <Image src="/goals_winners.svg" width={300} height={300} />
            <p className="text-2xltext-gray-800">Concluir suas metas!</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <span>Icons made by: </span>
          <a
            href="https://www.flaticon.com/authors/roundicons"
            title="Roundicons"
          >
            Roundicons
          </a>
          <span> from: </span>
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
