import React from "react";

export default function ContactItem({ children, href }) {
  return (
    <a
      className="w-36 md:w-44 h-14 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 font-semibold flex justify-center items-center text-xl"
      data-aos="flip-left"
      href={href}
    >
      {children}
    </a>
  );
}
