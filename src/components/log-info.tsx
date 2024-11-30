"use client";

import { useContext, useState } from "react";
import { GameContext } from "@/contexts/game-context";
import ReverseButton from "./reverse-button";
import Alarm from "./alarm";
import { twMerge } from "tailwind-merge";

export default function LogInfo() {
  const context = useContext(GameContext);
  const { state, dispatch } = context!;
  const [isReversed, setIsReversed] = useState(false);

  const jumpTo = (index: number) => {
    if (index === -1) return;
    const nextGameLog = state.gameLog.slice(0, index + 1);
    dispatch({ type: "SET_GAME_LOG", payload: nextGameLog });
    dispatch({ type: "SET_CURRENT_MOVE", payload: index });
  };

  const handleReverse = () => {
    setIsReversed((prev: boolean) => !prev);
  };

  const currentMove = state.currentMove;
  const log = Array(currentMove + 1)
    .fill(null)
    .map((_, index) => {
      const label =
        index === 0
          ? currentMove === 0
            ? "Game Start"
            : "You are playing now"
          : `Goto Move #${index}`;
      return (
        <li key={index} className="animate-slide-in-from-left text-center mb-2">
          <span
            className={twMerge(
              index !== 0
                ? "cursor-pointer hover:text-gray-400"
                : "cursor-not-allowed"
            )}
            onClick={() => jumpTo(index - 1)}
          >
            {label}
          </span>
        </li>
      );
    });

  const reverseLog = log.slice().reverse();

  return (
    <div className="relative mx-auto w-full max-w-[35rem]">
      <ReverseButton
        isReversed={isReversed}
        handleReverse={handleReverse}
        className="absolute top-0 right-10"
      />
      <div className="mt-6 mx-auto w-full max-w-[35rem] min-h-44 overflow-auto custom-scrollbar">
        <ul>{isReversed ? reverseLog : log}</ul>
      </div>
      <Alarm />
    </div>
  );
}
