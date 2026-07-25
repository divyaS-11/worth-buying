type HeroProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function Hero({
  search,
  setSearch,
  category,
  setCategory,
}: HeroProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Buy Smarter. Waste Less.
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
          Discover honest product recommendations to help you make smarter
          buying decisions. Find products that are truly worth your money.
        </p>

        {/* Search Box */}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 rounded-l-lg px-5 py-3 outline-none focus:border-blue-500"
          />

          <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* All */}
          <button
            onClick={() => setCategory("All")}
            className={`px-6 py-3 rounded-full border transition ${
              category === "All"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            }`}
          >
            🌐 All
          </button>

          {/* Earbuds */}
          <button
            onClick={() => setCategory("Earbuds")}
            className={`px-6 py-3 rounded-full border transition ${
              category === "Earbuds"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            }`}
          >
            🎧 Earbuds
          </button>

          {/* Smart Watches */}
          <button
            onClick={() => setCategory("Smart Watches")}
            className={`px-6 py-3 rounded-full border transition ${
              category === "Smart Watches"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            }`}
          >
            ⌚ Smart Watches
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;