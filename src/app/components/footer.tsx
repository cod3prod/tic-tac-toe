import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute mb-2 bottom-0 w-full flex justify-center items-center animate-bounce">
      <Link href="https://www.github.com/cod3prod">
        <span className="text-2xl text-bold text-opacity-50 text-amber-950 hover:text-3xl hover:text-opacity-100 hover:text-black  trainsition transition-all">
          Created by cod3prod
        </span>
      </Link>
    </footer>
  );
}
