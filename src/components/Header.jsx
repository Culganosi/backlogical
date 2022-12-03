import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header(input, setInput, handleSubmit, games, setGames) {
  const handleLogout = () => {
    console.log("Logout");

    // CLEAR DATA FROM STORAGE

    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav class="px-2 sm:px-4 py-2.5 dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-between font-press-start max-w-screen-xl px-4 md:px-6 py-2.5 mx-auto">
        <Link to="/">
          <h1 className=" text-purple-600 text-2xl">Backlogical</h1>
        </Link>
        <div className="flex items-center gap-6">
          <SearchBar
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            games={games}
            setGames={setGames}
          />

          {/* <Link to="/login">
            <button className="text-purple-600 text-xs">Login</button>
          </Link> */}

          <button onClick={handleLogout} className="text-purple-600 text-xs">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
