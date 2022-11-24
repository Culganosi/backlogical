function ResultTest({ games }) {
  console.log(games);
  return (
    <div className="flex flex-col items-center bg-gray-800">
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
            className="flex items-center justify-between bg-gray-700 font-press-start mt-12 w-3/4"
          >
            <img
              src={game.cover.url.replace("t_thumb", "t_cover_small")}
              alt={game.name}
            />
            <h1 className="text-lg mb-1 p-2 max-w-lg ">{game.name}</h1>
            <div className="flex flex-col justify-between">
              <h4 className="mb-1 p-2 text-s max-w-xs">
                {game.genres[0].name}
              </h4>
              <h4 className="mb-1 p-2 text-s max-w-s">{releaseDate}</h4>
              <div className="flex">
                {game.platforms.map((platform) => {
                  return (
                    <p className="p-2 text-xs italic">
                      {platform.abbreviation}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ResultTest;
