import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../styles/images/logo.svg";


export default function NavBar() {
  return (
    <nav className="grid grid-cols-3 items-center px-8 h-16 bg-white dark:bg-gray-800 border-gray-200 text-xl">
      <div className="flex w-full">
        <Logo alt="logo" className="w-10 mr-3" />
        <span className="self-center text-gray-800 dark:text-gray-400">
          Brick McDermott
        </span>
      </div>
      <div className="flex justify-end items-center md:order-2">
        <button className="px-4 rounded-full text-black outline-black text-lg hover:text-blue-600 hover:dark:text-blue-500 bg-purple-600 dark:bg-purple-500 font-bold">
          <Link to="contact">Contact</Link>
        </button>
      </div>
      <div
        className="hidden md:flex w-full md:w-auto justify-between items-center md-order-1"
        id="mobile-menu"
      >
        <ul className="flex flex-col md:flex-row justify-center w-full mt-4 md:mt-0 md:space-x-8">
          <Link to="/" className="block p-1 text-gray-800 hover:text-purple-600 dark:text-gray-400 hover:dark:text-purple-500">
            Home
          </Link>
          <Link to="projects" className="block p-1 text-gray-800 hover:text-purple-600 dark:text-gray-400 hover:dark:text-purple-500">
            Projects
          </Link>
          <Link to="resources" className="block p-1 text-gray-800 hover:text-purple-600 dark:text-gray-400 hover:dark:text-purple-500">
            Resources
          </Link>
        </ul>
      </div>
    </nav>
  );
}
