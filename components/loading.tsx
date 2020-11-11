import Image from 'next/image';

const Loading: React.FC = () => {
  return (
    <div className="mx-auto h-full flex flex-col items-center justify-center spinner">
      <Image
        className="spinner-image"
        src="/loading.svg"
        height={50}
        width={50}
      />
    </div>
  );
};

export default Loading;
