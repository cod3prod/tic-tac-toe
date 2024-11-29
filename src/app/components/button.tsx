import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(props: ComponentPropsWithoutRef<"button">) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={twMerge(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
