import { Link } from "react-router-dom";
import { FaXbox, FaSteam, FaPlaystation, FaHome } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import SearchTest from "./SearchBar";

function Header(input, setInput, handleSubmit, games, setGames) {
  return (
    <div className="font-press-start flex items-center justify-between mx-6 mb-6">
      <div>
        <Link to="/">
          <h1 className="text-purple-600 text-6xl mt-10 text-center ml-8">
            Backlogical
          </h1>
        </Link>
      </div>
      <div className="flex items-center mt-10 space-x-8 mr-8">
        <SearchTest
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          games={games}
          setGames={setGames}
        />
        <Link to="/login">
          <h1 className="text-purple-600 text-s">Login</h1>
        </Link>
      </div>
    </div>
  );
}
const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Header;
