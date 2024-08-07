import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarUser(props) {
  const navigate = useNavigate();

  function logoutHandler(e) {
    e.preventDefault();
    props.removeToken();
    navigate(0);
  }

  return (
    <nav className="bg-yellow-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                to="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-red-900 "
              >
                <span className="font-bold">Travel Guide</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/home"
                className="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Home
              </Link>
              <Link
                to="/themes"
                className="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Catalog
              </Link>
              <Link
                to="/search"
                className="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Search
              </Link>
              <Link
                to="/create"
                className="py-5 px-3 text-gray-700 hover:text-red-900"
              >
                Recommend
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div className="py-2 px-3 bg-orange-400 hover:bg-orange-300 text-orange-900 hover:text-orange-800 rounded transition duration-1000">
              Welcome and enjoy
            </div>
            <button
              onClick={logoutHandler}
              className="py-2 px-3 bg-red-400 hover:bg-red-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Logout
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

export default NavbarUser;
