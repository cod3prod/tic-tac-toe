import { GameState, GameAction } from "@/types/game-reducer";

export const initialState: GameState = {
  currentMove: 0,
  gameLog: [Array(9).fill(null)],
  isXWinner: null,
  winningSequence: null,
};

export const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
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
