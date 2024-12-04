type BoardState = (boolean | null)[];

export type GameState = {
  currentMove: number;
  gameLog: BoardState[];
  isXWinner: boolean | null;
  winningSequence: number[] | null;
};

export type GameAction =
  | { type: "SET_CURRENT_MOVE"; payload: number }
  | { type: "SET_GAME_LOG"; payload: BoardState[] }
  | { type: "SET_IS_X_WINNER"; payload: boolean | null }
  | { type: "SET_WINNING_SEQUENCE"; payload: number[] | null };
