import { twMerge } from "tailwind-merge";

export default function Turn(props: {
  isCurrentTurn: boolean;
  children: string;
}) {
  const { isCurrentTurn, children } = props;

  return (
    <div
      className={twMerge(
        "flex justify-center items-center h-18 text-white sm:text-xl font-bold px-4 py-2 rounded-md border-2",
        isCurrentTurn ? "border-yellow-500 text-yellow-300 animate-pulse" : ""
      )}
    >
      {children}
    </div>
  );
}
