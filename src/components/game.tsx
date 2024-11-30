"use client";

import { useEffect, useContext } from "react";
import Board from "./board";
import LogInfo from "./log-info";
import { GameContext } from "@/contexts/game-context";
import { calculateWinner } from "@/utils/calculate-winner";
import Status from "./status";

export default function Game() {
  const context = useContext(GameContext);
  const { state, dispatch } = context!;

  useEffect(() => {
    const currentGameLog = state.gameLog.slice();
    const currentBoard = currentGameLog[currentGameLog.length - 1];
    const { isXWinner, line } = calculateWinner(currentBoard);

    dispatch({ type: "SET_IS_X_WINNER", payload: isXWinner });
    dispatch({ type: "SET_WINNING_SEQUENCE", payload: line });
  }, [state.currentMove]);

  return (
    <main className="container mx-auto p-4">
      <div className="p-4 mx-auto w-full max-w-[35rem] h-86 sm:w-[35rem] sm:h-[30rem] rounded-md bg-gradient-to-br from-[#373523] to-[#282617] shadow-md shadow-[rgba(0,0,0,0.5)]">
        <Status />
        <Board />
      </div>
      <LogInfo />
    </main>
  );
}
