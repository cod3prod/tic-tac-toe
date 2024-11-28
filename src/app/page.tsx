import Game from "./components/game";

export default function Page() {
  return (
    <>
      <header>헤더</header>
      <main className="w-full">
        <Game />
      </main>
      <footer>푸터</footer>
    </>
  );
}
