import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function ReverseButton(props: {
  isReversed: boolean;
  handleReverse: () => void;
  className: string;
}) {
  const { isReversed, handleReverse, className } = props;

  return (
    <button className={twMerge("flex justify-center items-center w-10 h-10 text-2xl rounded-full bg-[rgba(255,255,255,0.5)] hover:bg-black hover:text-white cursor-pointer", className)} onClick={handleReverse}>
      {isReversed ? <FaArrowUp /> : <FaArrowDown />}
    </button>
  );
}
