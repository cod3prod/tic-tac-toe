import Board from "./board";
import InfoList from "./info-list";
import { GameProvider } from "@/contexts/game-context";

export default function Game() {
  return (
    <main className="container px-4">
      <GameProvider>
        <Board />
        <InfoList />
      </GameProvider>
    </main>
  );
}
