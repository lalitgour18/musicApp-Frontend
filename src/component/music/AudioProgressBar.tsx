import "../../App.css";

interface AudioProgressBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  duration: number;
  currentProgress: number;
  buffered: number;
}
export default function AudioProgressBar(props: AudioProgressBarProps) {
  const { duration, currentProgress, ...rest } = props;

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="progress-bar">
        <input
          type="range"
          name="progress"
          min={0}
          max={duration}
          value={currentProgress}
          {...rest}
        />
        <div className="timing-info">
          <span>{formatTime(currentProgress)}</span>
          <span> / </span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </>
  );
}
