interface IntervalProps {
  initialTime: number;
  finalTime: number;
  day: string;
  selected?: boolean;
}

const Interval: React.FC<IntervalProps> = (props) => {
  function handleClick() {
    console.log('AAAA');
  }

  return (
    <div
      className="w-32 h-16 border-black border-interval cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="">
        {props.initialTime} - {props.finalTime}
      </h1>
    </div>
  );
};

export default Interval;
