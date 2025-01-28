"use client";

import Game from "../components/game";
import { GameProvider } from "@/contexts/game-context";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full grow">
        <GameProvider>
          <Game />
        </GameProvider>
      </main>
      <Footer />
    </>
  );
}
