import React from "react";

export default function Experience({ children }) {
  return (
    <div
      className="w-36 md:w-44 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 font-semibold flex justify-center items-center"
      data-aos="flip-left"
    >
      <div>{children}</div>
    </div>
  );
}
