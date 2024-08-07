import DetailsCard from "./DetailsCard/DetailsCard";

import { useGetOneThemes } from "../../../hooks/useThemes";
import { useParams } from "react-router-dom";
function Details({ token }) {
  let { themesId } = useParams();
  console.log("themeId", themesId);
  const [theme] = useGetOneThemes(themesId);
  console.log(theme);

  return (
    <>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-purple-200 flex justify-center items-center">
          <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <DetailsCard
                token={token}
                key={theme._id}
                theme={theme}
              ></DetailsCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
