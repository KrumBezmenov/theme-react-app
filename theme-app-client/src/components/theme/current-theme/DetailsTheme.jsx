import DetailsCard from "./DetailsCard/DetailsCard";
import { useParams } from "react-router-dom";
import DetailsCardButtons from "./DetailsCard/DetailsCardButtons";
import { useEffect, useState } from "react";

async function authTheme(themeId, token) {
  return fetch(`http://localhost:4000/themes/${themeId}/details`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((data) => data.json());
}

async function guestTheme(themeId, token) {
  return fetch(`http://localhost:4000/themes/${themeId}/details`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

function Details({ token }) {
  let { themesId } = useParams();

  const [theme, setTheme] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!loaded) {
          let result = {};
          if (token) {
            result = await authTheme(themesId, token);
          } else {
            result = await guestTheme(themesId);
          }

          setTheme(result);

          setLoaded(true);
        }
      } catch (e) {
        setLoaded(false);
      }
    })();
  });

  return (
    <>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-cover bg-[url('https://media.istockphoto.com/id/1426412520/video/wavy-sea.jpg?s=640x640&k=20&c=bpYL4jjLNK4LETIGEewFsbcVHWZNva-OHB48RE5zIRI=')] flex justify-center items-center">
          <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <DetailsCard
                token={token}
                key={theme._id}
                theme={theme}
              ></DetailsCard>
              <DetailsCardButtons
                token={token}
                key={theme._id}
                theme={theme}
              ></DetailsCardButtons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
