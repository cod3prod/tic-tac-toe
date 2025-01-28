# Tic Tac Toe

**되돌리기 기능을 포함한 틱택토**

## 🎯 **Project Purpose**

**핵심 목표**

- **다양한 Hooks 사용**: `useState`, `useReducer`, `useEffect`를 사용하여 게임의 상태와 로직을 관리합니다.
- **Context API**: Context API를 통해 게임의 상태를 전역적으로 관리하고, 컴포넌트 간의 상태 공유를 효율적으로 처리합니다.

## 🔨 **Tech Stack**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS

## 📝 **Key Learnings**

### 1. 다양한 Hooks

`useReducer`를 사용하여 게임의 상태를 관리하고, `useState`와 `useEffect`를 활용하여 게임 로직을 구현했습니다.

```tsx
import { GameState, GameAction } from "@/types/game-reducer";

export const initialState: GameState = {
  currentMove: 0,
  gameLog: [Array(9).fill(null)],
  isXWinner: null,
  winningSequence: null,
};

export const gameReducer = (
  state: GameState = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case "SET_CURRENT_MOVE":
      return { ...state, currentMove: action.payload };

    case "SET_GAME_LOG":
      return { ...state, gameLog: action.payload };

    case "SET_IS_X_WINNER":
      return { ...state, isXWinner: action.payload };

    case "SET_WINNING_SEQUENCE":
      return { ...state, winningSequence: action.payload };

    default:
      return state;
  }
};
```

### 2. Context API

Context API를 사용하여 게임의 상태를 전역적으로 관리하고, 컴포넌트 간의 상태 공유를 효율적으로 처리했습니다.

```tsx
"use client";

import { GameState, GameAction } from "@/types/game-reducer";
import React, { createContext, Dispatch, useReducer } from "react";
import { gameReducer, initialState } from "@/reducers/game-reducer";

type GameContextType = {
  state: GameState;
  dispatch: Dispatch<GameAction>;
};

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
```

## ⚙️ **Setup**

```bash
# 설치
npm i

# 로컬 환경 실행
npm run dev
```
