"use client";

import { useState, useContext, useEffect } from "react";
import { GameContext } from "@/contexts/game-context";
import Button from "./button";

export default function Alarm() {
  const context = useContext(GameContext);
  const { state, dispatch } = context!;
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  useEffect(() => {
    if (state.isXWinner !== null || state.currentMove === 9) setIsAlarmOpen(true);
  }, [state.currentMove, state.isXWinner]);

  const handleClick = () => {
    setIsAlarmOpen((prev: boolean) => !prev);
    dispatch({ type: "SET_CURRENT_MOVE", payload: 0 });
    dispatch({ type: "SET_IS_X_WINNER", payload: null });
    dispatch({ type: "SET_GAME_LOG", payload: [Array(9).fill(null)] });
  };

  return (
    isAlarmOpen && (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="w-80 h-32 p-5 bg-white rounded-md flex flex-col justify-between items-center">
          <p>
            {state.isXWinner === null && state.currentMove === 9
              ? "Draw"
              : state.isXWinner
              ? "X의 승리"
              : "O의 승리"}
          </p>
          <Button onClick={handleClick}>Restart</Button>
        </div>
      </div>
    )
  );
}
