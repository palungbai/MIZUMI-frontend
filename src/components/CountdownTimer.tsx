interface CountdownTimerProps {
  remaining: number;
  isCounting: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  remaining,
  isCounting,
}) => {
  return (
    <div>
      {isCounting && remaining > 0 && (
        <img
          src={`/02-capture-page/${remaining}.svg`}
          alt={`Countdown ${remaining}`}
          className="w-1/4 h-1/4 absolute bottom-[955px] left-[404px] z-30"
        />
      )}
    </div>
  );
};

export default CountdownTimer;
