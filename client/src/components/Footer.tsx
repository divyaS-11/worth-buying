import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Worth Buying
          </h2>

          <p className="mt-4 text-gray-300">
            Helping you make smarter buying decisions with honest product
            recommendations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                🏠 Home
              </Link>
            </li>

            <li>
              <Link to="/wishlist" className="hover:text-blue-400 transition">
                ❤️ Wishlist
              </Link>
            </li>

            <li>
              <Link to="/compare" className="hover:text-blue-400 transition">
                ⚖️ Compare
              </Link>
            </li>
          </ul>
        </div>

        

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 Worth Buying. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;