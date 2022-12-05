import { useState, useEffect } from "react";
import axios from "axios";

function HighestRated() {
  const [highRated, setHighRated] = useState([]);
  const fetchData = async () => {
    await axios
      .post("http://localhost:8080/highestRated", {})

      .then((response) => {
        setHighRated(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  console.log(highRated);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-press-start text-purple-600">
        Highest Rated
      </h1>
      <div className="grid grid-cols-5 transition-colors duration-300 dark:bg-gray-800 h-screen font-press-start h-fit">
        {highRated &&
          highRated.map((highrate) => (
            <div className="p-6 m-6">
              <ul>
                <img
                  class="w-full h-auto"
                  src={highrate.cover.url.replace("t_thumb", "t_cover_big")}
                />
                <li className="text-xs text-purple-500 pt-4">
                  {highrate.name ? highrate.name : null}
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
export default HighestRated;
