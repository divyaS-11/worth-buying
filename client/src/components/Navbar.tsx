import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          Worth Buying
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Categories
            </a>
          </li>

          <li>
            <Link
              to="/wishlist"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              ❤️ Wishlist
            </Link>
          </li>
            <li>
  <Link
    to="/compare"
    className="hover:text-blue-600 transition-colors duration-200"
  >
    📊 Compare
  </Link>
</li>


          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Reviews
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;