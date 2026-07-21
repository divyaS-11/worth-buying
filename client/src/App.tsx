import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";

import { products } from "./data/products";

type HomeProps = {
  wishlist: number[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;
  compareList: number[];
  setCompareList: React.Dispatch<React.SetStateAction<number[]>>;
};

function Home({
  wishlist,
  setWishlist,
  compareList,
  setCompareList,
}: HomeProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") {
        return a.price - b.price;
      }

      if (sortBy === "priceHigh") {
        return b.price - a.price;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  return (
    <>
      <Hero
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-end mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="default">Default</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              badge={product.badge}
              name={product.name}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              description={product.description}
              wishlist={wishlist}
              setWishlist={setWishlist}
              compareList={compareList}
              setCompareList={setCompareList}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 text-xl mt-10">
            No products found.
          </p>
        )}

      </section>
    </>
  );
}

function App() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              wishlist={wishlist}
              setWishlist={setWishlist}
              compareList={compareList}
              setCompareList={setCompareList}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
              products={products}
              compareList={compareList}
              setCompareList={setCompareList}
            />
          }
        />

        <Route
          path="/compare"
          element={
            <Compare
              compareList={compareList}
              products={products}
            />
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;