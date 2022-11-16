function GameCard({
  heading,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col items-center w-full h-full rounded-lg p-6 shadow-sm ${className}`}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-42 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div>

        <h3 className="pt-5 text-4xl font-press-start text-green-600 block pb-2">
          {heading}
        </h3>
      </div>
    </div>
  );
}

function GameCardPresentation() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-3 pl-24 w-full m-24">
      <GameCard
        className="bg-gray-700"
        heading="Xbox"
        thumbnailSrc="https://source.unsplash.com/random/300x300?xbox"
      />

      <GameCard
        className="bg-gray-700"
        heading="Steam"
        thumbnailSrc="https://source.unsplash.com/random/300x300?steam+gaming"
      />

      <GameCard
        className="bg-gray-700"
        heading="Nintendo"
        thumbnailSrc="https://source.unsplash.com/random/300x300?nintendoswitch"
      />
      <GameCard
        className="bg-gray-700"
        heading="Playstation"
        thumbnailSrc="https://source.unsplash.com/random/300x300?playstation5"
      />
    </div>
  );
}

export { GameCardPresentation };
