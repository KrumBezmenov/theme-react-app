import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import themesAPI from "../../../../api/themes-api";
// import themesAPI from "../../../../api/themes-api";

async function deleteTheme(themeData, themeId, token) {
  return fetch(`http://localhost:4000/themes/${themeId}/delete`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((data) => data.json());
}
function DetailsCardButtons(props) {
  let { themesId } = useParams();

  //   const [country] = useState();
  //   const [city] = useState();
  //   const [image] = useState();
  //   const [genre] = useState();
  //   const [description] = useState();
  const navigate = useNavigate();

  const token = props.token;

  const deleteThemeHandler = async (e) => {
    e.preventDefault();
    const theme = await deleteTheme(
      {
        // country,
        // city,
        // image,
        // genre,
        // description,
      },
      themesId,
      token
    );
    navigate("/themes");
  };
  if (props.theme.isOwner) {
    return (
      <>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <Link to="/themes">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Back
                  </button>
                </Link>
              </div>

              <div className="w-1/2 px-2">
                <button
                  onClick={deleteThemeHandler}
                  className="w-full bg-red-200 dark:bg-red-700 text-red-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-red-300 dark:hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
              <div className="w-1/2 px-2">
                <Link to={`/themes/${props.theme._id}/edit`}>
                  <button className="w-full bg-orange-200 dark:bg-orange-700 text-orange-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-orange-300 dark:hover:bg-orange-600">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <Link to="/themes">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DetailsCardButtons;
