import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import axios from "axios";

function Xbox() {
  const [gamedata, setGameData] = useState();
  const fetchData = async () => {
    await axios
      .post("http://localhost:8080/getGames")
      .then((response) => {
        const allGames = response.data;
        setGameData(allGames);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex items-center justify-center font-press-start pl-24">
        <h1 className="text-2xl text-green-600 mt-10 lg:mt-20 lg:text-4xl">
          Xbox Backlog
        </h1>
      </div>
      <FormInput />
      {gamedata && (
        <img
          className="pl-24"
          src={gamedata[0].cover.url.replace("t_thumb", "t_cover_big")}
          alt="Suikoden II cover"
        />
      )}
      {gamedata && <h3 className="text-center pl-24">{gamedata[0].name}</h3>}
      {gamedata && <h3 className="text-center pl-24">{gamedata[0].summary}</h3>}
    </div>
  );
}

export default Xbox;
