import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function GameDetails() {
  const navigate = useNavigate();
  const addGame = () => {
    axios
      .post("http://localhost:8080/addGame", {
        gameTitle: currentGame[0].name,
      })
      .then((res) => {
        console.log(res);
        // Add something like "Games successfully added to backlog"
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    console.log(currentGame);
    fetchDetails();
  }, []);
  // const releaseDate = date.toLocaleDateString("en-US", options);
  return (
    <>
      <div>
        <img
          src={
            currentGame
              ? currentGame[0].screenshots[0].url.replace("t_thumb", "t_1080p")
              : null
          }
          // ADD A MAX-WIDTH
          className="w-full h-[28rem] mt-24 blur-xs"
        />
        <div className="flex flex-col items-center justify-center -m-64 mb-2">
          <img
            src={
              currentGame
                ? currentGame[0].cover.url.replace("t_thumb", "t_cover_big")
                : null
            }
            alt="big-cover"
            className="relative"
          />
        </div>
        <div className="flex flex-col justify-center items-center font-press-start text-center">
          <h1 className="text-3xl text-purple-600 my-2 mx-24">
            {currentGame ? currentGame[0].name : null}
          </h1>
          <h2 className="my-6 underline">Game Summary</h2>
          <p className="text-sm text-green-600 mx-24 w-3/4">
            {currentGame ? currentGame[0].summary : null}
          </p>
          <h2 className="my-3 underline">Platforms</h2>
          <div>
            {currentGame
              ? currentGame[0].platforms.map((platform) => {
                  return (
                    <p className="inline-flex p-2 text-md italic mb-2">
                      {platform.abbreviation}
                    </p>
                  );
                })
              : null}
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-800 border-solid border-2 border-purple-100 rounded-lg px-12 pb-6 mb-12 mx-auto w-3/4">
          <h3 className="font-press-start underline mt-2">Screenshots</h3>
          <div className="flex flex-wrap gap-6 justify-center mt-2">
            {currentGame
              ? currentGame[0].screenshots.slice(0, 3).map((screenshots) => {
                  return (
                    <img
                      className="w-1/4"
                      src={screenshots.url.replace(
                        "t_thumb",
                        "t_screenshot_med"
                      )}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div className="flex justify-center gap-12">
          <button
            onClick={addGame}
            class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-6 "
          >
            Add Game to Backlog
          </button>
          <Link to="/result">
            <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-6 ">
              Back to Search Results
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
