"use client";

import { useContext } from "react";
import { GameContext } from "@/contexts/game-context";
import Turn from "./turn";

export default function Status() {
  const context = useContext(GameContext);
  const { state } = context!;

  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 gap-2">
        <Turn isCurrentTurn={state.currentMove % 2 === 0}>O의 차례</Turn>
        <Turn isCurrentTurn={state.currentMove % 2 === 1}>X의 차례</Turn>
      </div>
    </div>
  );
}
