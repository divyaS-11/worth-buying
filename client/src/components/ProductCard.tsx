import { Link } from "react-router-dom";
import toast from "react-hot-toast";

type ProductCardProps = {
  id: number;
  image: string;
  badge: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;

  wishlist: number[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;

  compareList: number[];
  setCompareList: React.Dispatch<React.SetStateAction<number[]>>;
};

function ProductCard({
  id,
  image,
  badge,
  name,
  price,
  rating,
  reviews,
  description,
  wishlist,
  setWishlist,
  compareList,
  setCompareList,
}: ProductCardProps) {

  const toggleWishlist = () => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));

      toast("Removed from Wishlist", {
        icon: "💔",
      });

    } else {
      setWishlist([...wishlist, id]);

      toast.success("Added to Wishlist ❤️");
    }
  };

  const toggleCompare = () => {
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

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {"★".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="relative">

        {/* Wishlist */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 z-20 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-blue-700 transition"
        >
          {wishlist.includes(id) ? "❤️" : "🤍"}
        </button>

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </span>

        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>

      {/* Product Info */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-900">
          {name}
        </h2>

        <div className="mt-2">

          <div className="text-yellow-500 text-lg">
            {renderStars(rating)}
          </div>

          <p className="text-sm text-gray-500">
            {rating} ({reviews.toLocaleString()} Reviews)
          </p>

        </div>

        <p className="text-2xl font-bold text-blue-600 mt-3">
          ₹{price.toLocaleString()}
        </p>

        <p className="text-gray-600 mt-3 leading-6">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <Link
            to={`/product/${id}`}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition font-medium"
          >
            View Details
          </Link>

          <button
            onClick={toggleCompare}
            className={`px-4 rounded-lg font-medium transition ${
              compareList.includes(id)
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {compareList.includes(id) ? "✓ Added" : "Compare"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;