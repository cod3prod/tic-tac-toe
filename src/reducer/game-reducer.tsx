type BoardState = (boolean | null)[];

export type State = {
  currentMove: number;
  gameLog: BoardState[];
  isXWinner: boolean | null;
  winningSequence: number[] | null;
};

export const initialState: State = {
  currentMove: 0,
  gameLog: [Array(9).fill(null)],
  isXWinner: null,
  winningSequence: null,
};

export type Action =
  | { type: "SET_CURRENT_MOVE"; payload: number }
  | { type: "SET_GAME_LOG"; payload: BoardState[] }
  | { type: "SET_IS_X_WINNER"; payload: boolean | null }
  | { type: "SET_WINNING_SEQUENCE"; payload: number[] | null };

// Reducer 함수
export const gameReducer = (state: State = initialState, action: Action): State => {
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
