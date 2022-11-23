import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [games, setGames] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const fetchData = async () => {
      axios
        .post("http://localhost:8080/getGames", {
          params: {
            input: input,
          },
        })

        .then((response) => {
          console.log(response.data);
          setGames(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios
  //       .post("http://localhost:8080/getGames", {
  //         params: {
  //           input: { input },
  //         },
  //       })

  //       .then((response) => {
  //         setGames(response.data);
  //         console.log(games);
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="h-48 mt-4">
      <div class="relative ml-80 mr-80">
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
          className="block w-full p-4 pl-10 mb-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 focus:outline-none border-2 focus:border-2"
          placeholder="Enter Game Title"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Search Games
        </button>
      </div>

      <div className="flex flex-col items-center ">
        {games.map((game) => {
          const date = new Date(game.release_dates[0].date * 1000);
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          const releaseDate = date.toLocaleDateString("en-US", options);
          return (
            <div
              key={game.id}
              className="flex flex-col justify-center items-center font-press-start pl-24"
            >
              <img
                src={game.cover.url.replace("t_thumb", "t_cover_big")}
                alt={game.name}
              />
              <h1 className="text-lg mb-1 p-2">{game.name}</h1>
              <h4 className="mb-1 p-2 text-s">{game.genres[0].name}</h4>
              <h4 className="mb-1 p-2 text-s">{releaseDate}</h4>
              <div className="flex">
                {game.platforms.map((platform) => {
                  return (
                    <p className="p-2 text-xs italic">
                      {platform.abbreviation}
                    </p>
                  );
                })}
              </div>
              {/* <p className="mb-1 p-4 text-xs">{game.summary}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
