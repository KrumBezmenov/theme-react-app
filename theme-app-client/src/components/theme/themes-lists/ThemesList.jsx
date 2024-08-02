import { useEffect, useState } from "react";
import * as themesAPI from "../../../api/themes-api";

function ThemesList() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    themesAPI.getAll().then((result) => setThemes(result));
  }, []);

  return (
    <>
      <div class="selection:bg-rose-500 selection:text-white">
        <div class="min-h-screen bg-purple-200 flex justify-center items-center">
          <div class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
            <div class="container mx-auto mx-auto p-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg border p-4">
                  <img
                    src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                    alt="Placeholder Image"
                    class="w-full h-48 rounded-md object-cover"
                  />
                  <div class="px-1 py-4">
                    <div class="font-bold text-xl mb-2">Blog Title</div>
                    <p class="text-gray-700 text-base">
                      This is a simple blog card example using Tailwind CSS. You
                      can replace this text with your own blog content.
                    </p>
                  </div>
                  <div class="px-1 py-4">
                    <div class="w-1/2 px-2">
                      <a href="/:themesId/details">
                        <button class="w-full  bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                          Details
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemesList;
