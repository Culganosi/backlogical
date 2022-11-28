import { Link } from "react-router-dom";
function ResultTest({ games }) {
  console.log(games);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 bg-gray-800 p-12 mt-40">
      {games.map((game) => {
        const date = new Date(game.release_dates[0].date * 1000);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };

        const releaseDate = date.toLocaleDateString("en-US", options);
        return (
          <div
            key={game.id}
            className="flex flex-col justify-between max-w-sm m-auto w-72 mt-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="/gamedetails">
              <img
                className="rounded-t-lg w-full hover:opacity-50"
                src={game.cover.url.replace("t_thumb", "t_cover_big")}
                alt={game.name}
              />
            </Link>
            <div className="p-2">
              <h1 className="font-press-start tracking-tight text-gray-900 dark:text-purple-600">
                {game.name}
              </h1>
              <div className="left-0 italic font-press-start">
                <h4 className="text-xs max-w-xs p-2 mt-6 pr-6">
                  {game.genres[0].name}
                </h4>
                <h4 className="text-xs max-w-s p-2 mt-6">{releaseDate}</h4>
              </div>
            </div>

            <button class="px-3 py-2 text-sm font-press-start text-center text-white bg-purple-700 rounded-b-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 ">
              Add to Backlog
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ResultTest;
