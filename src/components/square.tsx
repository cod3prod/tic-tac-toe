"use client";

import { GameContext } from "@/contexts/game-context";
import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export default function Square(props: {
  isXNext: boolean | null;
  isInWinningSequence: boolean | null;
  handleClick: () => void;
}) {
  const { isXNext, isInWinningSequence, handleClick } = props;
  const context = useContext(GameContext);
  const { state } = context!;
  
  return (
    <div
      className={twMerge("w-full h-full bg-[#aca788] flex justify-center items-center cursor-pointer", state.isXWinner === null && "hover:bg-[#419f5a59] transition duration-200")}
      onClick={handleClick}
    >
      {isXNext === null ? null : isXNext ? (
        <FiX
          className="text-[10rem]"
          style={{
            color: isInWinningSequence ? "red" : "black",
          }}
        />
      ) : (
        <FiCircle
          className="p-1 sm:p-4 text-[10rem]"
          style={{
            color: isInWinningSequence ? "red" : "black",
          }}
        />
      )}
    </div>
  );
}
