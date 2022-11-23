import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="font-press-start flex items-center justify-between mx-12">
      <h1 className="text-purple-600">Backlogical</h1>
      <div>
        <SearchBar />
      </div>
      <h1 className="text-purple-600">DarkMode</h1>
    </div>
  );
}

export default Header;
