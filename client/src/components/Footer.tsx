import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Worth Buying
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Helping you make smarter buying decisions with honest product
            recommendations. Compare products, discover top picks, and shop
            with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                🏠 Home
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="hover:text-blue-400 transition"
              >
                ❤️ Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/compare"
                className="hover:text-blue-400 transition"
              >
                ⚖️ Compare
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            About
          </h3>

          <p className="text-gray-300 leading-7">
            Worth Buying helps users discover the best gadgets with honest
            reviews, value-for-money ratings, and easy product comparisons.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Worth Buying. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;