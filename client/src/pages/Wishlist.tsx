import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  image: string;
  badge: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
};

type WishlistProps = {
  wishlist: number[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;
  products: Product[];
  compareList: number[];
  setCompareList: React.Dispatch<React.SetStateAction<number[]>>;
};

function Wishlist({
  wishlist,
  setWishlist,
  products,
  compareList,
  setCompareList,
}: WishlistProps) {

  const savedProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const toggleCompare = (id: number) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter((item) => item !== id));
    } else {
      if (compareList.length < 2) {
        setCompareList([...compareList, id]);
      } else {
        alert("You can compare only 2 products.");
      }
    }
  };

  if (savedProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">
          ❤️ My Wishlist
        </h1>

        <p className="text-gray-600 text-lg">
          Your wishlist is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        ❤️ My Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {savedProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative"
          >

            {/* Wishlist Heart */}

            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-3 right-3 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:bg-blue-700 transition"
            >
              ❤️
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p className="text-blue-600 text-2xl font-bold mt-2">
                ₹{product.price.toLocaleString()}
              </p>

              <p className="text-gray-600 mt-2">
                ⭐ {product.rating} ({product.reviews.toLocaleString()} Reviews)
              </p>

              <div className="mt-5 flex gap-3">

                <Link
                  to={`/product/${product.id}`}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition"
                >
                  View Details
                </Link>

                <button
                  onClick={() => toggleCompare(product.id)}
                  className={`px-4 rounded-lg transition ${
                    compareList.includes(product.id)
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {compareList.includes(product.id)
                    ? "✓ Added"
                    : "Compare"}
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;