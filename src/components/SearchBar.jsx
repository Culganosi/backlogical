import { useContext } from "react";
import { SearchContext } from "../Contexts/SearchContext";
import { Link } from "react-router-dom";

function SearchBar() {
  const { setInput, input, handleSubmit } = useContext(SearchContext);
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="transition-colors duration-300">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-purple-500 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          name="input"
          className="p-3 px-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 focus:outline-none border-2 focus:border-2"
          placeholder="Search Games"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          onKeyPress={handleKeypress}
        />
        <Link to="/result">
          <button
            onClick={handleSubmit}
            type="submit"
            class="text-white absolute right-0 bottom-2.5 mr-2 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
