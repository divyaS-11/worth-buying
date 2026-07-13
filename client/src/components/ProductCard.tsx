
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  price: string;
  rating: string;
  description: string;
};

function ProductCard({
  id,
  image,
  name,
  price,
  rating,
  description,
}: ProductCardProps) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300">

      <img
  src={image}
  alt={name}
  className="w-full h-60 object-cover"
/>

      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-900">
          {name}
        </h2>

        <p className="text-yellow-500 mt-2">
          ⭐ {rating}
        </p>

        <p className="text-2xl font-bold text-blue-600 mt-3">
          {price}
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