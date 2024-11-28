"use client";

import { Action, State } from "@/reducer/game-reducer";
import React, { createContext, Dispatch, useReducer } from "react";
import { gameReducer, initialState } from "@/reducer/game-reducer";

type GameContextType = {
    state: State
    dispatch: Dispatch<Action>
}

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [ state, dispatch ] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}