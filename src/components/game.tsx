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
  }, [state.currentMove, dispatch, state.gameLog]);

  return (
    <section className="container mx-auto p-4">
      <div className="p-8 mx-auto h-full w-full max-w-[35rem] rounded-md bg-linear-to-br from-[#373523] to-[#282617] shadow-md shadow-[rgba(0,0,0,0.5)]">
        <Status />
        <Board />
      </div>
      <LogInfo />
    </section>
  );
}
