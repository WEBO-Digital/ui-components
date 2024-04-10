import React, { useRef, useState } from "react";
import Flame from "./sections/Flame";
import { CheckIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <main className="w-full h-screen flex place-items-center justify-center">
      <section
        className="w-[44rem] h-[26rem] bg-neutral-800 rounded-lg border border-neutral-600 flex flex-row p-8 absolute justify-between stroke-[0.1] hover:stroke-[0.15]"
        ref={cardsRef}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <div className="flex flex-col w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <FaceSmileIcon className="w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner" />
            <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">
              ज्वाला
            </h1>
            <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
              Hover over to the flame to see magic ✨
            </p>
          </div>
          <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Built with React & Tailwind</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Fully Reusable</p>
            </span>
          </div>
        </div>
        <div className="w-3/5 flex flex-col place-items-center">
          {/* SVG Here */}
          <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
        </div>
      </section>
    </main>
  );
};

export default Card;
