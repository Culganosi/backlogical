import { Link } from "react-router-dom";
import SearchTest from "./SearchBar";
import axios from "axios";
function Header(input, setInput, handleSubmit, games, setGames) {
  const handleLogout = () => {
    axios.get("http://localhost:8080/logout").then((response) => {
      if (response) {
        console.log(response);
      }
    });
  };
  return (
    <nav class="px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="font-press-start flex flex-col flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/">
          <h1 className="text-purple-600 text-4xl ml-8 mr-16">Backlogical</h1>
        </Link>
        <div className="flex items-center mt-10 space-x-8 mr-8">
          <Link to="/login">
            <h1 className="text-purple-600 text-s px-8">Login</h1>
          </Link>
          <SearchTest
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            games={games}
            setGames={setGames}
          />
          <Link to="/login">
            <button
              onClick={handleLogout}
              className="text-purple-600 text-s px-8"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
