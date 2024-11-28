type BoardState = (boolean | null)[];

export type State = {
  currentMove: number;
  boardState: BoardState;
  gameLog: BoardState[];
  isOWinner: boolean | null;
};

export const initialState: State = {
  currentMove: 0,
  boardState: [null, null, null, null, null, null, null, null, null],
  gameLog: [],
  isOWinner: null,
};

export type Action =
  | { type: "SET_CURRENT_MOVE"; payload: number }
  | { type: "SET_BOARD_STATE"; payload: BoardState }
  | { type: "SET_GAME_LOG"; payload: BoardState[] }
  | { type: "SET_IS_O_WINNER"; payload: boolean | null };

// Reducer 함수
export const gameReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "SET_CURRENT_MOVE":
      return { ...state, currentMove: action.payload };

    case "SET_BOARD_STATE":
      return { ...state, boardState: action.payload };

    case "SET_GAME_LOG":
      return { ...state, gameLog: action.payload };

    case "SET_IS_O_WINNER":
      return { ...state, isOWinner: action.payload };

    default:
      return state;
  }
};
