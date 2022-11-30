import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
function GameDetails() {
  const [currentGame, setCurrentGame] = useState(null);
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    const fetchDetails = async () => {
      await axios
        .post(`http://localhost:8080/getDetails/`, {
          params: {
            id: id,
          },
        })

        .then((response) => {
          console.log(response.data);
          setCurrentGame(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    console.log("this works");
    fetchDetails();
  }, []);
  // const releaseDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <img
        src={
          currentGame
            ? currentGame[0].cover.url.replace("t_thumb", "t_cover_big")
            : null
        }
        alt="big-cover"
      />
      <div className="font-press-start text-center">
        <h1 className="text-3xl text-purple-600 my-6 mx-24">
          {currentGame ? currentGame[0].name : null}
        </h1>
        <h2 className="my-6 underline">Game Summary</h2>
        <p className="text-sm text-green-600 mx-24">
          {currentGame ? currentGame[0].summary : null}
        </p>
        {currentGame
          ? currentGame[0].platforms.map((platform) => {
              return (
                <p className="inline-flex p-2 text-md italic">
                  {platform.abbreviation}
                </p>
              );
            })
          : null}
      </div>
      <div className="flex flex-col items-center bg-gray-800 border-solid border-2 border-purple-100 rounded-lg px-12 pb-6 mb-12 mx-18 w-3/4">
        <h3 className="font-press-start underline mt-2">Screenshots</h3>
        {/* <div className="flex flex-wrap gap-6 justify-center mt-2">
          {currentGame
            ? currentGame[0].screenshots.slice(0, 3).map((screenshots) => {
                return (
                  <img
                    className="w-1/4"
                    src={screenshots.url.replace("t_thumb", "t_screenshot_med")}
                  />
                );
              })
            : null}
        </div> */}
      </div>
      <Link to="/result">
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-6">
          Back to Search Results
        </button>
      </Link>
    </div>
  );
}

export default GameDetails;
