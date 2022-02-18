import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../styles/images/logo.svg";

export default function NavBar() {
  const itemStyle =
    "block p-3 text-gray-800 hover:text-purple-600 dark:text-gray-400 hover:dark:text-purple-500";
    
  return (
    <nav className="flex px-8 justify-between items-center bg-white dark:bg-gray-800 border-gray-200">
      <div className="flex">
        <Logo alt="logo" className="h-10 w-10 mr-3 content-center" />
        <span className="self-center text-lg text-gray-800 dark:text-gray-400">
          Brick McDermott
        </span>
      </div>
      <div className="flex items-center md:order-2">
        <button className="px-4 rounded-full text-black text-lg hover:text-yellow-600 hover:dark:text-yellow-400 bg-purple-600 dark:bg-purple-500 font-bold">
          <Link to="contact">Contact</Link>
        </button>
      </div>
      <div
        className="hidden md:flex w-full md:w-auto justify-between items-center md-order-1"
        id="mobile-menu"
      >
        <ul className="flex flex-col md:flex-row mt-4 md:mt-0 md:space-x-8">
          <Link to="/" className={itemStyle}>
            Home
          </Link>
          <Link to="projects" className={itemStyle}>
            Projects
          </Link>
          <Link to="resources" className={itemStyle}>
            Resources
          </Link>
        </ul>
      </div>
    </nav>
  );
}
