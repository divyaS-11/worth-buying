type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  badge: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
};

type CompareProps = {
  compareList: number[];
  products: Product[];
};

function Compare({ compareList, products }: CompareProps) {
  const selectedProducts = products.filter((product) =>
    compareList.includes(product.id)
  );

  if (selectedProducts.length < 2) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">
          📊 Compare Products
        </h1>

        <p className="text-gray-600 text-lg">
          Please select 2 products to compare.
        </p>
      </div>
    );
  }

  const [product1, product2] = selectedProducts;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-10">
        📊 Product Comparison
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-300">

          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 border">Feature</th>
              <th className="p-4 border">{product1.name}</th>
              <th className="p-4 border">{product2.name}</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border p-4 font-semibold">Image</td>

              <td className="border p-4">
                <img
                  src={product1.image}
                  alt={product1.name}
                  className="w-40 mx-auto"
                />
              </td>

              <td className="border p-4">
                <img
                  src={product2.image}
                  alt={product2.name}
                  className="w-40 mx-auto"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-semibold">Price</td>
              <td className="border p-4">
                ₹{product1.price.toLocaleString()}
              </td>
              <td className="border p-4">
                ₹{product2.price.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-semibold">Rating</td>
              <td className="border p-4">
                ⭐ {product1.rating}
              </td>
              <td className="border p-4">
                ⭐ {product2.rating}
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-semibold">Reviews</td>
              <td className="border p-4">
                {product1.reviews.toLocaleString()}
              </td>
              <td className="border p-4">
                {product2.reviews.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-semibold">Category</td>
              <td className="border p-4">
                {product1.category}
              </td>
              <td className="border p-4">
                {product2.category}
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-semibold">Description</td>
              <td className="border p-4">
                {product1.description}
              </td>
              <td className="border p-4">
                {product2.description}
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Compare;