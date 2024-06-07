import { useCallback, useEffect, useState, useRef } from "react";
import "./rangeSlider.css";
export interface RangeSliderProps {
  min: number;
  max: number;
  fill?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, fill }) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<number>(min);
  const maxValRef = useRef<number>(max);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number): number => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-80">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-0 thumb thumb--left ${
            minVal <= max / 2 ? "z-50" : "z-10"
          }`}
          style={{
            appearance: "none",
            pointerEvents: "none",
            outline: "none",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-0 thumb  thumb--right ${
            maxVal > max / 2 ? "z-50" : "z-10"
          }`}
          style={{
            appearance: "none",
            pointerEvents: "none",
            outline: "none",
          }}
        />

        <div className="relative w-[200px]">
          <div className="absolute h-1.5 rounded-sm bg-gray-300 w-full z-10" />
          <div
            ref={range}
            style={{ backgroundColor: fill }}
            className="absolute h-1.5 rounded-sm bg-teal-200 z-40"
          />
          <div className="absolute text-xs mt-5 left-1.5">{minVal}</div>
          <div className="absolute  text-xs mt-5 right-0">{maxVal}</div>
        </div>
      </div>
    </div>
  );
};
