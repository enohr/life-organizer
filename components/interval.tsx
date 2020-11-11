interface IntervalProps {
  initialTime: string;
  finalTime: string;
  day: string;
  selected?: boolean;
  onClick(): void;
}

const Interval: React.FC<IntervalProps> = (props) => {
  return (
    <div
      className="w-32 h-16 border-black border-interval cursor-pointer cell"
      onClick={props.onClick}
    >
      <h1 className="">
        {props.initialTime} - {props.finalTime}
      </h1>
      {props.selected && <h1>Selecionado</h1>}
    </div>
  );
};

export default Interval;
