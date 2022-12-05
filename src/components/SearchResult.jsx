import { Link } from "react-router-dom";

function ResultTest({ games }) {
  return (
    <div className="transition-colors duration-300">
      <h1 className="font-press-start text-purple-600  text-center text-xl mt-28 mb-12">
        Search Results
      </h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 dark:bg-gray-700 py-6 px-12 mx-16 rounded-lg">
        {games.map((game) => {
          const date = new Date(
            game.release_dates ? game.release_dates[0].date * 1000 : null
          );
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          const releaseDate = date.toLocaleDateString("en-US", options);
          return (
            <div
              key={game?.id}
              className="flex flex-col hover:scale-105 justify-between max-w-sm m-auto w-72 mt-6 mb-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to={`/game/${game.id}`}>
                <img
                  className="rounded-t-lg w-full hover:opacity-50"
                  src={
                    game.cover
                      ? game.cover.url.replace("t_thumb", "t_cover_big")
                      : null
                  }
                  alt={game?.name}
                />
              </Link>
              <div className="p-2">
                <h1 className="font-press-start tracking-tight text-gray-900 dark:text-purple-600">
                  {game?.name}
                </h1>
                <div className="left-0 italic font-press-start">
                  <h4 className="text-xs max-w-xs p-2 mt-6 pr-6">
                    {game.genres ? game.genres[0].name : null}
                  </h4>
                  <h4 className="text-xs max-w-s p-2 mt-6">{releaseDate}</h4>
                </div>
              </div>
              <button class="px-3 py-2 text-sm font-press-start text-center text-white bg-purple-700 rounded-b-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-900 dark:focus:ring-purple-800 ">
                Add to Backlog
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResultTest;
