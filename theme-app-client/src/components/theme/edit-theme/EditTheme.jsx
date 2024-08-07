import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import themesAPI from "../../../api/themes-api";

async function editOneTheme(themeData, themeId, token) {
  return fetch(`http://localhost:4000/themes/${themeId}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(themeData),
  }).then((data) => data.json());
}

function EditTheme({ token }) {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  let { themesId } = useParams();

  let theme = {};

  useEffect(() => {
    (async () => {
      try {
        if (!loaded) {
          const result = await themesAPI.getOne(themesId);
          setCountry(result.country);
          setCity(result.city);
          setImage(result.image);
          setGenre(result.genre);
          setDescription(result.description);
          setLoaded(true);
        }
      } catch (e) {
        setLoaded(false);
        // Deal with the fact the chain failed
      }
    })();
  });
  // [theme] = useGetOneThemes(themesId);
  // setTheme(themeResult);
  //
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const theme = await editOneTheme(
      {
        country,
        city,
        image,
        genre,
        description,
      },
      themesId,
      token
    );
    if (theme && theme.error) {
      setErrors([theme.error]);
      return;
    }

    navigate("/themes");
  };

  return (
    <>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-purple-200 flex justify-center items-center">
          <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg bg-red-500">
            <div className="mt-10 text-center font-bold">Editting time</div>
            <div className="mt-3 text-center text-4xl font-bold">
              Edit Journey
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="p-8">
                <div className="flex gap-4">
                  <div>
                    <label>Country</label>
                    <input
                      id="country"
                      type="country"
                      name="country"
                      value={country}
                      // onChange={changeHandler}
                      onChange={(e) => setCountry(e.target.value)}
                      className="mt-1 block w-1/1 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="Country"
                    />
                  </div>
                  <div>
                    <label>City</label>
                    <input
                      id="city"
                      type="city"
                      name="city"
                      value={city}
                      // onChange={changeHandler}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-1 block w-1/1 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="City"
                    />
                  </div>
                </div>

                <div className="my-6 flex gap-4">
                  <div className="flex gap-4">
                    <div>
                      <label>Image</label>
                      <input
                        id="image"
                        type="img"
                        name="image"
                        value={image}
                        // value={values.image}
                        // onChange={changeHandler}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 block w-1/1 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        placeholder="Image URL"
                      />
                    </div>
                    <div>
                      <label>Denre</label>
                      <input
                        id="genre"
                        type="genre"
                        name="genre"
                        value={genre}
                        // value={values.genre}
                        // onChange={changeHandler}
                        onChange={(e) => setGenre(e.target.value)}
                        className="mt-1 block w-1/1 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        placeholder="Type Of Vacation"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <label>Description</label>
                    <textarea
                      name="description"
                      id="description"
                      value={description}
                      // value={theme.description}
                      // onChange={(e) => setDescription(e.target.value)}
                      onChange={handleDescriptionChange}
                      cols="30"
                      rows="10"
                      className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold "
                      placeholder="Describe your experience"
                    ></textarea>
                  </div>
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
                <div className="text-center">
                  <input
                    className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
                    value="Save"
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

export default EditTheme;
