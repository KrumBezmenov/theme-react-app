import { useEffect, useState } from "react";
import * as themesAPI from "../../../api/themes-api";
import ItemCard from "./ItemCard/ItemCard";

function ThemesList() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    themesAPI.getAll().then((result) => setThemes(result));
  }, []);

  return (
    <>
      <div class="selection:bg-rose-500 selection:text-white">
        <div class="min-h-screen bg-purple-200 flex justify-center items-center">
          <div class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
            <div class="container mx-auto  p-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemesList;
