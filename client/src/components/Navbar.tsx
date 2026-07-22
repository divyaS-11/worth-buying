import { Link } from "react-router-dom";

type NavbarProps = {
  wishlistCount: number;
  compareCount: number;
};

function Navbar({
  wishlistCount,
  compareCount,
}: NavbarProps) {
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
      🏠 Home
    </Link>
  </li>

  <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
    📂 Categories
  </li>

  <li>
    <Link
      to="/wishlist"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
    >
      ❤️ Wishlist

      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full min-w-[24px] text-center">
        {wishlistCount}
      </span>
    </Link>
  </li>

  <li>
    <Link
      to="/compare"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
    >
      ⚖️ Compare

      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full min-w-[24px] text-center">
        {compareCount}
      </span>
    </Link>
  </li>

</ul>

      </div>
    </nav>
  );
}

export default Navbar;