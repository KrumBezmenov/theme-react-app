import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //   const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <nav class="bg-yellow-400">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <Link
                to="#"
                class="flex items-center py-5 px-2 text-gray-700 hover:text-red-900 "
              >
                <span class="font-bold">Travel Guide</span>
              </Link>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <Link
                to="/home"
                class="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Home
              </Link>
              <Link
                to="/themes"
                class="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Catalog
              </Link>
              <Link
                to="/search"
                class="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Search
              </Link>
              <Link
                to="/create"
                class="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Recommend
              </Link>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-1">
            <Link
              to="/login"
              class="py-2 px-3 bg-green-400 hover:bg-green-300 text-green-900 hover:text-green-800 rounded transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              class="py-2 px-3 bg-orange-400 hover:bg-orange-300 text-orange-900 hover:text-orange-800 rounded transition duration-300"
            >
              Signup
            </Link>
            <Link
              to="/logout"
              class="py-2 px-3 bg-red-400 hover:bg-red-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Logout
            </Link>
          </div>

          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
