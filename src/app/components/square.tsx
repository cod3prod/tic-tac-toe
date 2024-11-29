"use client";

import { FiX } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

export default function Square(props: {
  isXNext: boolean | null;
  isInWinningSequence: boolean | null;
  handleClick: () => void;
}) {
  const { isXNext, isInWinningSequence, handleClick } = props;
  return (
    <div
      className="w-full h-full bg-[#aca788] flex justify-center items-center cursor-pointer"
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
          className="text-[10rem]"
          style={{
            color: isInWinningSequence ? "red" : "black",
          }}
        />
      )}
    </div>
  );
}
