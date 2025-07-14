import { useEffect, useState } from "react";

const ProgressBar = () => {
  const bars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 96, 98, 99, 100];

  return (
    <div className="font-sans text-center p-4">
      <h1 className="text-2xl font-bold mb-6">Progress Bar</h1>
      {bars.map((progress) => (
        <SingleBar key={progress} progress={progress} />
      ))}
    </div>
  );
};

const SingleBar = ({ progress }) => {
  // to manage the progress
  const [animatedProgress, setAnimatedProgress] = useState(0);
  // useffect listens for changes in progress and updates animatedProgress after a short delay
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="m-2.5 border border-black rounded-lg overflow-hidden">
      {/*  the progress is represented by div that moves using trasform */}
      <div
        className="bg-green-500 py-0.5 text-right transition-all duration-500 ease-in"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
