import axios from "axios";
import { useState, useEffect } from "react";

function Games() {
  const [games, setGameData] = useState([]);
  const loadGames = async () => {
    await axios
      .post("http://localhost:8080/getGames")
      .then((response) => {
        setGameData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex items-center justify-center font-press-start pl-24">
        <h1 className="text-2xl text-green-600 mt-10 lg:mt-20 lg:text-4xl mb-10">
          Games List
        </h1>
      </div>
      <ul>
        {games &&
          games.map((game) => {
            console.log(game);
            return (
              <div className="flex flex-col items-center justify-center font-press-start pl-24 mb-10">
                <img src={game.cover.url.replace("t_thumb", "t_cover_big")} />
                <h1>{game.name}</h1>
                <h3>{game.summary}</h3>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Games;
