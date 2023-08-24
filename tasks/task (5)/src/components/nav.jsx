import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-slate-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/">Movie App</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-violet-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/fav"
              className="text-white hover:text-violet-600 transition duration-300 ease-in-out"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/counter"
              className="text-white hover:text-violet-600 transition duration-300 ease-in-out"
            >
              Counter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
