// import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 px-6 flex justify-between items-center">
      {/* Navbar Title */}
      <p className="text-xl font-semibold">Navbar</p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Project</li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu (Appears when isOpen is true) */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 p-4 md:hidden">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
