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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          Buy Smarter. Waste Less.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover honest product recommendations to help you make smarter buying
          decisions. Find products that are truly worth your money.
        </p>

        {/* Search Box */}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl border border-gray-300 rounded-l-lg px-5 py-3 outline-none focus:border-blue-500"
          />

          <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => setCategory("All")}
            className={`px-5 py-2 rounded-full border transition ${
              category === "All"
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            🌐 All
          </button>

          <button
            onClick={() => setCategory("Earbuds")}
            className={`px-5 py-2 rounded-full border transition ${
              category === "Earbuds"
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            🎧 Earbuds
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;