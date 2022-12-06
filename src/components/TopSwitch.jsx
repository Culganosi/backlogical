import { useState, useEffect } from "react";
import axios from "axios";

function TopSwitch() {
  const [topSwitch, setTopSwitch] = useState([]);
  const fetchData = async () => {
    await axios
      .post("http://localhost:8080/highestRatedSwitch", {})

      .then((response) => {
        setTopSwitch(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  console.log(topSwitch);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-press-start text-red-600 text-left pl-10">
        Top Rated SNES
      </h1>
      <div className="grid grid-cols-5 transition-colors duration-300 dark:bg-gray-800 font-press-start max-w-3xl">
        {topSwitch &&
          topSwitch.map((switchgame) => (
            <div className="py-2 pl-10 w-44 h-full">
              <ul>
                <img
                  class="w-full h-auto"
                  src={switchgame.cover.url.replace("t_thumb", "t_cover_big")}
                />
                <li className="text-xs text-red-500 pt-4">
                  {switchgame.name ? switchgame.name : null}
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
export default TopSwitch;
