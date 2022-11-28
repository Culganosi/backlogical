import { Link } from "react-router-dom";
function GameDetails({ games }) {
  // const releaseDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <Link to="/result">
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-6">
          Back to Search Results
        </button>
      </Link>
      <img
        src={games[0].cover.url.replace("t_thumb", "t_cover_big")}
        alt="big-cover"
      />
      <div className="font-press-start text-center">
        <h1 className="text-3xl text-purple-600 my-6 mx-24">{games[0].name}</h1>
        <h2 className="my-6 underline">Game Summary</h2>
        <p className="text-sm text-green-600 mx-24">{games[0].summary}</p>
        {games[0].platforms.map((platform) => {
          return (
            <p className="inline-flex p-2 text-md italic">
              {platform.abbreviation}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col items-center border-solid border-2 border-purple-500 rounded-lg px-12 pb-6 mb-12">
        <h3 className="font-press-start underline">Screenshots</h3>
        <div className="flex gap-6">
          {games[0].screenshots.slice(0, 3).map((screenshots) => {
            return (
              <img
                className="h-auto"
                src={screenshots.url.replace("t_thumb", "t_screenshot_med")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
