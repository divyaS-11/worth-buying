import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavbarProps = {
  wishlistCount: number;
  compareCount: number;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function Navbar({
  wishlistCount,
  compareCount,
  setCategory,
}: NavbarProps) {
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="w-full flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Worth Buying
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-blue-600"
            >
              🏠 Home
            </Link>
          </li>

          <li className="relative">

            <button
              onClick={() => setShowCategories(!showCategories)}
              className="hover:text-blue-600"
            >
              📂 Categories ▼
            </button>

            {showCategories && (

              <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-lg border">

                <button
                  onClick={() => {
                    setCategory("Earbuds");
                    setShowCategories(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  🎧 Earbuds
                </button>

                <button
                  onClick={() => {
                    setCategory("Smart Watches");
                    setShowCategories(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  ⌚ Smart Watches
                </button>

              </div>

            )}

          </li>

          <li>
            <Link
              to="/wishlist"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              ❤️ Wishlist

              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {wishlistCount}
              </span>

            </Link>
          </li>

          <li>
            <Link
              to="/compare"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              ⚖️ Compare

              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {compareCount}
              </span>

            </Link>
          </li>

        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          {mobileMenu ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (

        <div className="md:hidden border-t bg-white">

          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            🏠 Home
          </Link>

          <button
            onClick={() => {
              setCategory("Earbuds");
              setMobileMenu(false);
            }}
            className="block w-full text-left px-6 py-4 hover:bg-gray-100"
          >
            🎧 Earbuds
          </button>

          <button
            onClick={() => {
              setCategory("Smart Watches");
              setMobileMenu(false);
            }}
            className="block w-full text-left px-6 py-4 hover:bg-gray-100"
          >
            ⌚ Smart Watches
          </button>

          <Link
            to="/wishlist"
            onClick={() => setMobileMenu(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            ❤️ Wishlist ({wishlistCount})
          </Link>

          <Link
            to="/compare"
            onClick={() => setMobileMenu(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            ⚖️ Compare ({compareCount})
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;