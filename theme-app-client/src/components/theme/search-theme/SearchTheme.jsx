import ItemsLists from "./items-lists/ItemsLists";
import SearchBar from "./search-bar/SearchBar";

function SearchTheme() {
  return (
    <>
      <div class="selection:bg-rose-500 selection:text-white">
        <SearchBar></SearchBar>
        <div class="min-h-screen bg-purple-200 flex justify-center items-center">
          <ItemsLists></ItemsLists>
        </div>
      </div>
    </>
  );
}

export default SearchTheme;
