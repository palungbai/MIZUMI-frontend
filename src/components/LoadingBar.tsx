import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const totalTime = 120;

  useEffect(() => {
    let currentTime = 0;
    const interval = setInterval(() => {
      currentTime += 1;
      setProgress((currentTime / totalTime) * 100);

      if (currentTime >= totalTime) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Progress value={progress} className="w-[50%]" />
    </div>
  );
};

export default LoadingBar;
