function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Worth Buying
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">

          <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
            Categories
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
            Reviews
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
            Contact
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;