import { useGetAllThemes } from "../../../hooks/useThemes";
import ItemCard from "./ItemCard/ItemCard";

function ThemesList() {
  const [themes] = useGetAllThemes();
  return (
    <>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-purple-200 flex justify-center items-center">
          <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
            <div className="container mx-auto  p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {themes.length > 0 ? (
                  themes.map((theme) => (
                    <div>
                      <ItemCard key={theme._id} theme={theme}></ItemCard>
                    </div>
                  ))
                ) : (
                  <div className="relative h-32 w-32 r">
                    <div className="absolute inset-y-0 right-0 left-30 w-16 text-green-600 text-5xl font-bold ">
                      No Recommendations Yet!
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemesList;
