import React from "react";

const ContactItem = ({ children, href }) => {
  return (
    <div data-aos="flip-left">
      <a
        className="w-36 md:w-44 h-14 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 font-semibold flex justify-center items-center text-xl
          transform hover:-translate-y-1 transition duration-200 ease-in-out"
        href={href}
      >
        {children}
      </a>
    </div>
  );
}

export default ContactItem; 