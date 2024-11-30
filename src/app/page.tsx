"use client";

import Game from "../components/game";
import { GameProvider } from "@/contexts/game-context";
import Header from "../components/heaeder";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <GameProvider>
          <Game />
        </GameProvider>
      </main>
      <Footer />
    </>
  );
}
