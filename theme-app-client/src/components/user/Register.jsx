import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

async function registerUser(credentials) {
  return fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function RegisterCard({ setToken }) {
  function validateForm({ email, password, rePassword }) {
    let errors = [];

    if (email.length == 0) {
      errors.push("Invalid Form, Email Address can not be empty");
    }

    if (email.length <= 10) {
      errors.push(
        "Invalid Form, Email Address can not be less than 10 characters"
      );
    }

    if (password.length < 4) {
      errors.push(
        "Invalid Form, Password must contain greater than or equal to 4 characters."
      );
    }

    if (password.length == 0) {
      errors.push("Invalid Form, Password must can not be empty.");
    }

    if (password !== rePassword) {
      errors.push("Password missmatch");
    }

    return errors;
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMap = validateForm({
      email,
      password,
      rePassword,
    });
    setErrors(errorMap);
    if (errorMap && errorMap.length > 0) {
      return;
    }

    if (password !== rePassword) {
      return;
    }

    const token = await registerUser({
      email,
      password,
      rePassword,
    });
    setToken(token);
    navigate("/");
  };
  return (
    <div className="selection:bg-rose-500 selection:text-white">
      <div className="min-h-screen bg-purple-200 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="relative h-48 bg-yellow-500 rounded-bl-4xl">
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">
                Join now!
              </h1>
              <form className="mt-12" method="POST" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-600"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>

                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="rePassword"
                    type="password"
                    name="rePassword"
                    onChange={(e) => setRePassword(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-600"
                    placeholder="rePassword"
                  />
                  <label
                    htmlFor="rePassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>
                <div>
                  {errors.length > 0 ? (
                    errors.map((error, index) => (
                      <div id="errors">
                        <p>{error}</p>
                      </div>
                    ))
                  ) : (
                    <span></span>
                  )}{" "}
                </div>
                <div className="btn-submit mt-20 px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer">
                  <button className=" text-white py-2 px-4 rounded-full font-bold ">
                    <input
                      value="Register"
                      type="submit"
                      className="btn-submit"
                    ></input>
                  </button>
                </div>
              </form>
              <Link
                to="/login"
                className="mt-4 block text-sm text-center font-medium text-yellow-600 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {" "}
                Already have an account?{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
RegisterCard.propTypes = {
  setToken: PropTypes.func.isRequired,
};
