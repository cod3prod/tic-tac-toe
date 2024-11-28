type GameLog = {
    gameLog: (number | null)[][];
}

export type GameContext = {
    gameLog: GameLog[];
    currentMove: number;
    boardStatus: (boolean | null)[];
    setGameLog: (gameLog: (number | null)[][]) => void;
    setCurrentMove: (currentMove: number) => void;
    setBoardStatus: (boardStatus: (boolean | null)[]) => void;
};

export type GameProvider = { 
    children: React.ReactNode
}