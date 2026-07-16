import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Worth Buying
          </h2>

          <p className="mt-4 text-gray-300">
            Helping you make smarter buying decisions with honest product recommendations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/wishlist" className="hover:text-blue-400">
                Wishlist
              </Link>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

        <ul className="space-y-2">
  <li>
    <a href="#" className="hover:text-blue-400">
      🐙 GitHub
    </a>
  </li>

 

  <li>
    <a href="#" className="hover:text-blue-400">
      📧 Email
    </a>
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