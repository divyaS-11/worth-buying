
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  image: string;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: number;
  description: string;

  wishlist: number[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;
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
}: ProductCardProps) {
  const toggleWishlist = () => {
  if (wishlist.includes(id)) {
    setWishlist(wishlist.filter((item) => item !== id));
  } else {
    setWishlist([...wishlist, id]);
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
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
     <div className="relative">
     <button
  onClick={toggleWishlist}
  className="absolute top-3 right-3 bg-blue-600 rounded-full w-10 h-10 shadow flex items-center justify-center text-2xl text-white hover:bg-blue-700 transition"
>
  {wishlist.includes(id) ? "❤️" : "🤍"}
</button>
  <div className="overflow-hidden">
  <img
    src={image}
    alt={name}
    className="w-full h-60 object-cover hover:scale-110 transition-transform duration-300"
  />
</div>

  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
    {badge}
  </span>
</div>

      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-900">
          {name}
        </h2>

        <div className="mt-2">
 <div className="text-yellow-500 text-lg">
  {renderStars(rating)}
</div>

  <p className="text-sm text-gray-600">
    {rating} ({reviews.toLocaleString()} Reviews)
  </p>
</div>
        <p className="text-2xl font-bold text-blue-600 mt-3">
  ₹{price.toLocaleString()}
</p>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <Link
        to={`/product/${id}`}
        className="block mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-center"
>
  View Details
</Link>

      </div>

    </div>
  );
}

export default ProductCard;