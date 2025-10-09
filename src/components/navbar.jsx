import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-l to-violet-950 from-blue-950 pl-6 pr-6">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/" className="text-[#16f2b3] text-2xl md:text-3xl font-bold">
            NITIN THENGDE
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span> 
          )}
        </button>

        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-8 
          absolute md:static left-0 top-16 w-full md:w-auto bg-violet-950 md:bg-transparent transition-all duration-300 ease-in-out z-50
          ${isOpen ? "flex opacity-100" : "hidden md:flex opacity-0 md:opacity-100"}`}
        >
          <li>
            <a
              href="#about"
              className="block px-4 py-2 text-white hover:text-pink-300 font-bold"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block px-4 py-2 text-white hover:text-pink-300 font-bold"
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block px-4 py-2 text-white hover:text-pink-300 font-bold"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block px-4 py-2 text-white hover:text-pink-300 font-bold"
            >
              EDUCATION
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block px-4 py-2 text-white hover:text-pink-300 font-bold"
            >
              PROJECTS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
