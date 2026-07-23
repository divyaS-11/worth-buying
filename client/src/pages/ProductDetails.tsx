import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

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

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mx-auto rounded-xl"
      />

      {/* Product Name */}
      <h1 className="text-4xl font-bold mt-8">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-blue-600 text-3xl font-bold mt-3">
        ₹{product.price.toLocaleString()}
      </p>

      {/* Rating */}
      <p className="text-yellow-500 mt-2 text-lg">
        ⭐ {product.rating} ({product.reviews.toLocaleString()} Reviews)
      </p>

      {/* Description */}
      <h2 className="text-2xl font-bold mt-10">
        Description
      </h2>

      <p className="text-gray-600 mt-3">
        {product.description}
      </p>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* Pros */}
        <div className="bg-green-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            ✅ Pros
          </h3>

          <ul className="space-y-3">
            {product.pros.map((pro, index) => (
              <li key={index} className="text-gray-700">
                ✔ {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-red-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            ❌ Cons
          </h3>
          
          <ul className="space-y-3">
            {product.cons.map((con, index) => (
              <li key={index} className="text-gray-700">
                ✖ {con}
              </li>
            ))}
          </ul>
        </div>

      </div>
       
       <div className="mt-10">

  <h2 className="text-2xl font-bold mb-5">
    🎯 Best For
  </h2>

  <div className="flex flex-wrap gap-3">
    {product.bestFor.map((item, index) => (
      <span
        key={index}
        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
      >
        {item}
      </span>
    ))}
  </div>

</div>

<div className="mt-10 bg-blue-50 rounded-xl p-6 shadow">

  <h2 className="text-2xl font-bold text-blue-700">
    ⭐ Worth Buying Score
  </h2>

  <p className="text-5xl font-bold text-blue-600 mt-4">
    {product.worthScore}/10
  </p>

  <p className="text-gray-600 mt-3">
    Based on value for money, features, build quality, and overall performance.
  </p>

</div>
      {/* Verdict */}
      <h2 className="text-2xl font-bold mt-10">
        Our Verdict
      </h2>

      <p className="text-gray-600 mt-3">
        This product offers excellent value for money and is one of our recommended choices in its price range.
      </p>

      {/* Buy Button */}
<a
  href="https://www.amazon.in"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
>
  🛒 Buy on Amazon
</a>

    </section>
  );
}

export default ProductDetails;