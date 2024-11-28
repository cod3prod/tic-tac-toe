"use client";

import { FiX } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";


export default function Square() {

  return (
    <div className="w-full h-full border rounded-md flex justify-center items-center shadow-sm shadow-black">
      {isXNext === null ? null : isXNext ? (
        <FiX style={{ fontSize: "5rem" }} />
      ) : (
        <FiCircle style={{ fontSize: "4rem" }} />
      )}
    </div>
  );
}
