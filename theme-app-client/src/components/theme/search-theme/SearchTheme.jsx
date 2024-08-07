import { useState } from "react";
import themesAPI from "../../../api/themes-api";
import ItemsLists from "./items-lists/ItemsLists";

function SearchTheme() {
  // useEffect(async () => {
  //   const searchData = await themesAPI.searchThemes("");
  //   console.log("searchData", searchData);

  //   setSearchData(searchData);
  // }, []);

  async function searchHandler(e) {
    e.preventDefault();

    const searchData = await themesAPI.searchThemes(query);

    setSearchData(searchData);
  }

  const [query, setQuery] = useState();

  const [searchData, setSearchData] = useState([]);
  // [searchData] = useGetAllThemes();
  return (
    <>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="bg-purple-200 py-10">
          <form className="max-w-md mx-auto ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                name="query"
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by country"
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button
                onClick={searchHandler}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="min-h-screen bg-purple-200 flex justify-center items-center">
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
            {searchData.length > 0 ? (
              searchData.map((theme) => (
                <div>
                  <ItemsLists key={theme._id} theme={theme}></ItemsLists>
                </div>
              ))
            ) : (
              <div className="relative h-32 w-32 r">
                <div className="absolute inset-y-0 right-0 left-30 w-16 text-green-600 text-5xl font-bold ">
                  <p>Best Of Luck </p>
                </div>
              </div>
            )}{" "}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchTheme;
