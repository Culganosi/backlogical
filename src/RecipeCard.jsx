function RecipeCard({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col items-center rounded-lg p-6 shadow-sm ${className}`}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-42 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div>

        <h3 className="pt-5 text-4xl font-normal text-green-600 block pb-2">
          {heading}
        </h3>

        <p className="font-normal text-green-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function RecipeCardPresenation() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8 p-3 pl-24 ml-3 w-full">
      <RecipeCard
        className="bg-gray-700"
        heading="Chicken Dinnah"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="https://source.unsplash.com/random/300x300?food"
      />

      <RecipeCard
        className="bg-gray-700"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="https://source.unsplash.com/random/300x300?beverage"
      />

      <RecipeCard
        className="bg-gray-700"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="https://source.unsplash.com/random/300x300?dessert"
      />
      <RecipeCard
        className="bg-gray-700"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="https://source.unsplash.com/random/300x300?pasta"
      />
    </div>
  );
}

export { RecipeCardPresenation };
