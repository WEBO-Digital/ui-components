export interface SemiCircleProgressProps {
  stroke: string; // Changed to string to accept color values
  strokeWidth: number;
  background: string;
  diameter: number;
  orientation?: string;
  direction?: string;
  title: string;
  showPercentValue?: boolean;
  percentage: number;
}
export const SemiCircleProgress: React.FC<SemiCircleProgressProps> = ({
  stroke,
  strokeWidth,
  background,
  diameter,
  orientation,
  direction,
  title,
  showPercentValue,
  percentage,
}) => {

  const coordinateForCircle: number = diameter / 2;
  const radius: number = (diameter - 2 * strokeWidth) / 2;
  const circumference = Math.PI * radius;
  let percentageValue;
  if (percentage > 100) {
    percentageValue = 100;
  } else if (percentage < 0) {
    percentageValue = 0;
  } else {
    percentageValue = percentage;
  }
  const semiCirclePercentage = percentageValue * (circumference / 100);
  let rotation;
  if (orientation === "down") {
    if (direction === "left") {
      rotation = "rotate(180deg) rotateY(180deg)";
    } else {
      rotation = "rotate(180deg)";
    }
  } else {
    if (direction === "right") {
      rotation = "rotateY(180deg)";
    }
  }
  return (
    <div
      className="semicircle-container flex flex-col justify-center items-center"
      style={{ position: "relative" }}
    >
      <svg
        width={diameter}
        height={diameter / 2}
        style={{
          transform: rotation,
          overflow: "hidden",
        }}
      >
        <circle
          strokeLinecap="round"
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={background}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference,
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage,
            transition:
              "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s",
          }}
        />
      </svg>
      <div
        className="semicircle-percent-value flex flex-col"
        style={{
          width: "100%",
          left: "0",
          textAlign: "center",
          bottom: orientation === "down" ? "auto" : "0",
          position: "absolute",
        }}
      >
        {title}
        <div>{showPercentValue && <>{`${percentage}%`}</>}</div>
      </div>
    </div>
  );
};
