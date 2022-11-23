import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [games, setGames] = useState([]);
  const [input, setInput] = useState("map");

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
    <div className="pl-24 text-center search h-48">
      <input
        name="input"
        type="text"
        placeholder={"Search Game"}
        className="bg-slate-300 text-center p-6 m-12"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div className="flex flex-col items-center ">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex justify-center items-center font-press-start pl-24 mb-8"
          >
            <img
              src={game.cover.url.replace("t_thumb", "t_cover_big")}
              alt={game.name}
            />
            <h1 className="mb-1 p-8">{game.name}</h1>
            <p className="mb-1 p-4 text-xs">{game.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
