interface CountdownTimerProps {
  remaining: number;
  isCounting: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  remaining,
  isCounting,
}) => {
  const getImageSrc = (remaining: number) => {
    switch (remaining) {
      case 1:
        return "/02-capture-page/one.svg";
      case 2:
        return "/02-capture-page/two.svg";
      case 3:
        return "/02-capture-page/three.svg";
      case 4:
        return "/02-capture-page/four.svg";
      case 5:
        return "/02-capture-page/five.svg";
      default:
        return "";
    }
  };

  return (
    isCounting && (
      <img
        src={getImageSrc(remaining)}
        alt={`Countdown ${remaining}`}
        className="w-1/4 h-1/4 absolute bottom-[955px] left-[404px] z-30"
      />
    )
  );
};

export default CountdownTimer;
