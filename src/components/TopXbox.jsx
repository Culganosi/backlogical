import { useState, useEffect } from "react";
import axios from "axios";

function TopXbox({ games }) {
  const [topXbox, setTopXbox] = useState([]);
  const fetchData = async () => {
    await axios
      .post("http://localhost:8080/highestRated", {})

      .then((response) => {
        setTopXbox(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  console.log(topXbox);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-press-start text-green-600">
        Highest Rated Xbox Games
      </h1>
      <div className="grid grid-cols-5 transition-colors duration-300 dark:bg-gray-800 font-press-start max-w-3xl">
        {topXbox &&
          topXbox.map((xbox) => (
            <div className="py-2 pr-10 w-44 h-full">
              <ul>
                <img
                  class=""
                  src={xbox.cover.url.replace("t_thumb", "t_cover_big")}
                />
                <li className="text-xs text-green-500 pt-4">
                  {xbox.name ? xbox.name : null}
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
export default TopXbox;
