import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

async function createOneTheme(themeData, token) {
  return fetch("http://localhost:4000/themes/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(themeData),
  }).then((data) => data.json());
}
function CreateTheme({ token }) {
  const navigate = useNavigate();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMap = validateForm({
      country,
      city,
      image,
      genre,
      description,
    });
    setErrors(errorMap);
    if (errorMap && errorMap.length > 0) {
      return;
    }

    const theme = await createOneTheme(
      {
        country,
        city,
        image,
        genre,
        description,
      },
      token
    );
    if (theme && theme.error) {
      setErrors([theme.error]);
      return;
    }

    navigate("/themes");
  };

  function validateForm({ country, city, image, genre, description }) {
    let errors = [];
    // Check if the Email is an Empty string or not.

    if (country.length == 0) {
      errors.push("Invalid Form, country can not be empty");
    }

    if (country.length <= 10) {
      errors.push("Invalid Form, country can not be less than 10 characters");
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, errors.push invalid form.

    if (city.length < 4) {
      errors.push(
        "Invalid Form, city must contain greater than or equal to 4 characters."
      );
    }

    if (city.length == 0) {
      errors.push("Invalid Form, city must can not be empty.");
    }
    return errors;
    // if all the conditions are valid, this means that the form is valid
  }

  return (
    <>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-purple-200 flex justify-center items-center">
          <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg bg-red-500">
            <div className="mt-10 text-center font-bold">Adventure time</div>
            <div className="mt-3 text-center text-4xl font-bold">
              Recommend Journey
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="p-8">
                <div className="flex gap-4">
                  <input
                    type="country"
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Country"
                  />
                  <input
                    type="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="City"
                  />
                </div>
                <div className="my-6 flex gap-4">
                  <div className="flex gap-4">
                    <input
                      type="img"
                      name="image"
                      onChange={(e) => setImage(e.target.value)}
                      className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="Image URL"
                    />
                    <input
                      type="genre"
                      name="genre"
                      onChange={(e) => setGenre(e.target.value)}
                      className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="Type Of Vacation"
                    />
                  </div>
                </div>
                <div className="">
                  <textarea
                    name="description"
                    id="text"
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="10"
                    className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold "
                    placeholder="Describe your experience"
                  ></textarea>
                </div>
                <div>
                  {errors.length > 0 ? (
                    errors.map((error, index) => (
                      <div className="bg-slate-400 p-3 left-20" id="errors">
                        <p>{error}</p>
                      </div>
                    ))
                  ) : (
                    <span></span>
                  )}{" "}
                </div>
                <div className="text-center">
                  <input
                    className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
                    value="Recommend"
                    type="submit"
                  ></input>
                </div>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default CreateTheme;
CreateTheme.propTypes = {
  setToken: PropTypes.func.isRequired,
};
