import { Link } from "react-router-dom";
import noiseImage from "../assets/products/noise-buds.jpg";

function FeaturedProduct() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2 items-center">

          {/* Left Side */}
          <div className="flex justify-center p-10">
            <img
              src={noiseImage}
              alt="Noise Buds X"
              className="w-80 hover:scale-110 transition duration-500"
            />
          </div>

          {/* Right Side */}
          <div className="text-white p-10">

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
              🔥 Featured Product
            </span>

            <h2 className="text-5xl font-bold mt-6">
              Noise Buds X
            </h2>

            <p className="mt-4 text-lg">
              ⭐ 4.5 (1,245 Reviews)
            </p>

            <p className="text-4xl font-bold mt-5">
              ₹1,499
            </p>

            <p className="mt-6 text-blue-100 leading-7">
              Experience premium sound quality, deep bass,
              and long battery life. Perfect for students,
              professionals, and daily entertainment.
            </p>

            <Link
              to="/product/1"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              View Details →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProduct;