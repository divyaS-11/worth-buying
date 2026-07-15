import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  // Find the product that matches the ID in the URL
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // If the product is not found
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-600">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mx-auto rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {product.name}
      </h1>

      <p className="text-blue-600 text-3xl font-bold mt-3">
        ₹{product.price.toLocaleString()}
      </p>

      <p className="text-yellow-500 mt-2 text-lg">
        ⭐ {product.rating}
      </p>

      <h2 className="text-2xl font-bold mt-10">
        Description
      </h2>

      <p className="text-gray-600 mt-3">
        {product.description}
      </p>

      <h2 className="text-2xl font-bold mt-10">
        Our Verdict
      </h2>

      <p className="text-gray-600 mt-3">
        This product offers excellent value for money and is one of our recommended choices in its price range.
      </p>

      <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg">
        Buy Now
      </button>

    </section>
  );
}

export default ProductDetails;