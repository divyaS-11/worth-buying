import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  

  const product = products.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
  const viewed =
    JSON.parse(localStorage.getItem("recentProducts") || "[]");

  const updated = [
    product?.id,
    ...viewed.filter((id: number) => id !== product?.id),
  ].slice(0, 5);

  localStorage.setItem(
    "recentProducts",
    JSON.stringify(updated)
  );
}, [product]);

  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
  setSelectedImage(0);
}, [id]);

  const relatedProducts = products
  .filter(
    (item) =>
      item.category === product?.category &&
      item.id !== product?.id
  )
  .slice(0, 3);

  const recentIds: number[] = JSON.parse(
  localStorage.getItem("recentProducts") || "[]"
);

const recentProducts = products.filter(
  (item) =>
    recentIds.includes(item.id) &&
    item.id !== product?.id
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

      <div className="grid md:grid-cols-2 gap-12 items-start">

  {/* Left Side - Product Gallery */}

<div>

  <div className="overflow-hidden rounded-2xl shadow-lg">

  <img
    src={product.images[selectedImage]}
    alt={product.name}
    className="w-full transition-transform duration-300 hover:scale-125 cursor-zoom-in"
  />

</div>

  {/* Thumbnail Images */}

  <div className="flex gap-3 mt-4">

    {product.images.map((img, index) => (

      <img
        key={index}
        src={img}
        alt={`${product.name}-${index}`}
        onClick={() => setSelectedImage(index)}
        className={`w-20 h-20 rounded-lg cursor-pointer border-2 transition ${
          selectedImage === index
            ? "border-blue-600"
            : "border-gray-300"
        }`}
      />

    ))}

  </div>

</div>

  {/* Right Side - Product Info */}
  <div>

    <h1 className="text-4xl font-bold">
      {product.name}
    </h1>

    <p className="text-blue-600 text-4xl font-bold mt-4">
      ₹{product.price.toLocaleString()}
    </p>

    <p className="text-yellow-500 text-lg mt-3">
      ⭐ {product.rating} ({product.reviews.toLocaleString()} Reviews)
    </p>

    <div className="flex flex-wrap gap-3 mt-6">
      {product.bestFor.map((item, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
        >
          {item}
        </span>
      ))}
    </div>

    <div className="bg-blue-50 rounded-xl p-5 mt-6">
      <h3 className="font-bold text-blue-700">
        ⭐ Worth Buying Score
      </h3>

      <p className="text-4xl font-bold text-blue-600 mt-2">
        {product.worthScore}/10
      </p>
    </div>

   <div className="flex flex-wrap gap-4 mt-8">

  <a
    href={product.amazonLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
  >
    🛒 Buy on Amazon
  </a>

  <button
    onClick={async () => {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("✅ Product link copied!");
      }
    }}
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
  >
    📤 Share
  </button>

</div>

  </div>

</div>

<hr className="my-12 border-gray-300" />

      {/* Description */}
      <h2 className="text-2xl font-bold mt-10">
        Description
      </h2>

      <p className="text-gray-700 leading-8 mt-4 text-lg">
        {product.description}
      </p>

      {/* Specifications */}

<div className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    📋 Specifications
  </h2>

  <div className="overflow-hidden rounded-2xl shadow-md border">

    <table className="w-full">

      <tbody>

        {Object.entries(product.specifications).map(([key, value]) => (

          <tr
            key={key}
            className="border-b last:border-b-0"
          >

            <td className="bg-gray-100 font-semibold px-6 py-4 w-1/3">
              {key}
            </td>

            <td className="px-6 py-4">
              {value}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* Pros */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
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
        <div className="bg-red-50 p-6 rounded-2xl shadow-md">
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

  

  <p className="text-5xl font-bold text-blue-600 mt-4">
    {product.worthScore}/10
  </p>

  <p className="text-gray-600 mt-3">
    Based on value for money, features, build quality, and overall performance.
  </p>

</div>
      <div className="mt-12 bg-gray-50 rounded-2xl p-6 shadow-md">

  <h2 className="text-2xl font-bold">
    🏆 Our Verdict
  </h2>

  <p className="text-gray-700 mt-4 leading-8">
    This product offers excellent value for money and is one of our recommended choices in its price range.
  </p>

</div>

{/* Customer Reviews */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    ⭐ Customer Reviews
  </h2>

  <div className="space-y-6">

    {product.customerReviews.map((review, index) => (

      <div
        key={index}
        className="bg-white rounded-2xl shadow-md p-6"
      >

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            {review.name.charAt(0)}
          </div>

          <div>

            <h3 className="font-bold text-lg">
              {review.name}
            </h3>

            <p className="text-yellow-500">
              {"⭐".repeat(review.rating)}
            </p>

          </div>

        </div>

        <p className="mt-4 text-gray-700 leading-7">
          {review.comment}
        </p>

      </div>

    ))}

  </div>

</div>

{/* FAQ */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    ❓ Frequently Asked Questions
  </h2>

  <div className="space-y-4">

    {product.faq.map((item, index) => (

      <details
        key={index}
        className="border rounded-xl p-5 shadow-sm group"
      >

        <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">

          {item.question}

          <span className="group-open:rotate-180 transition">
            ▼
          </span>

        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          {item.answer}
        </p>

      </details>

    ))}

  </div>

</div>

{/* Recently Viewed */}

{recentProducts.length > 0 && (

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    🕒 Recently Viewed
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {recentProducts.map((item) => (

      <div
        key={item.id}
        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
      >

        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">

          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <p className="text-blue-600 font-bold mt-2">
            ₹{item.price.toLocaleString()}
          </p>

          <Link
            to={`/product/${item.id}`}
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            View Details
          </Link>

        </div>

      </div>

    ))}

  </div>

</div>

)}

{/* Related Products */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    You May Also Like
  </h2>

  <hr className="my-10 border-gray-300 md:hidden" />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

   {relatedProducts.map((item) => (

  <div
    key={item.id}
    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
  >

    <img
      src={item.image}
      alt={item.name}
      className="w-full h-52 object-cover"
    />

    <div className="p-5">

      <h3 className="text-xl font-semibold">
        {item.name}
      </h3>

      <p className="text-blue-600 font-bold mt-2">
        ₹{item.price.toLocaleString()}
      </p>

      <p className="text-yellow-500 mt-2">
        ⭐ {item.rating}
      </p>

      <Link
  to={`/product/${item.id}`}
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
>
  View Details
</Link>

    </div>

  </div>

))}

  </div>

</div>

    </section>
  );
}

export default ProductDetails;