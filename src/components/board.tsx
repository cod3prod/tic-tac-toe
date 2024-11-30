"use client";

import Square from "./square";
import { useContext } from "react";
import { GameContext } from "@/contexts/game-context";

export default function Board() {
  const context = useContext(GameContext);
  const { state, dispatch } = context!;

  const handleClick = (index: number) => {
    const currentGameLog = state.gameLog.slice();
    const currentBoardState = currentGameLog[currentGameLog.length - 1];
    if(currentBoardState[index] !== null || state.winningSequence !== null) return;

    const currentMove = state.currentMove;
    const nextBoardState = currentBoardState.slice();  
    const isXNext = currentMove % 2 !== 0;
    nextBoardState[index] = isXNext;
    

    dispatch({ type: "SET_GAME_LOG", payload: [...currentGameLog, nextBoardState] });
    dispatch({ type: "SET_CURRENT_MOVE", payload: currentMove + 1 });
  };

  return (
    <div className="mx-auto w-2/3 aspect-square grid grid-cols-3 grid-rows-3 gap-2 sm:gap-4">
      {state.gameLog[state.gameLog.length - 1].map((isXNext: boolean | null, index: number) => (
        <Square
          key={index}
          isXNext={isXNext}
          isInWinningSequence={state.winningSequence !== null && state.winningSequence.includes(index)}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
