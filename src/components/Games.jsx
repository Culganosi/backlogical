import axios from "axios";
import { useState, useEffect } from "react";

function Games() {
  const [game, setGame] = useState([]);

  const fetchData = () => {
    return fetch("https://localhost:8080/getGames")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchData();
    console.log("DOING IT");
  }, []);

  return (
    <div className="content h-screen w-full">
      <h1 className="text-green-600">HELLO</h1>
    </div>
  );
}

export default Games;
