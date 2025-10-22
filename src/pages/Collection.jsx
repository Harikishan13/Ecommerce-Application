import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products, search, navigate, addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 10;

  // ✅ Filter products based on search term
  useEffect(() => {
    if (search.trim()) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
    setCurrPage(1);
  }, [products, search]);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currPage]);

  const inStockProducts = filteredProducts.filter((p) => p.inStock);
  const totalPages = Math.ceil(inStockProducts.length / itemsPerPage);
  const startIndex = (currPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = inStockProducts.slice(startIndex, endIndex);

  return (
    <section className="px-3 py-30 bg-gradient-to-r from-gray-200 to-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 overflow-auto">
        <h1 className="text-3xl font-bold mb-2">
          All <span className="text-gray-500 underline">Products</span>
        </h1>
        <p className="text-black/50">
          Explore our collection of stylish clothing and footwear made for <br />
          comfort, quality, and everyday confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <div
                key={product._id}
                className="px-2 py-4 mt-10 shadow-md hover:shadow-lg transition-shadow duration-300 w-fit"
              >
                <div
                  onClick={() =>
                    navigate(`/collection/${product.category}/${product._id}`)
                  }
                  className="flex items-center justify-center bg-white overflow-hidden h-[180px]"
                >
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="object-contain h-full w-auto transition-all duration-300 cursor-pointer"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[15px] uppercase line-clamp-1 py-0">
                    {product.name}
                  </h4>
                  <p className="line line-clamp-1 text-black/50">
                    {product.description}
                  </p>
                  <div className="flex justify-between pt-2 gap-2 mt-auto">
                    <p className="h-5 text-gray-600">{product.category}</p>
                    <button
                      className="border border-gray-300 py-2 px-1 text-xs rounded hover:bg-gray-100 transition cursor-pointer"
                      onClick={() => addToCart(product._id, selectedSize)}
                    >
                      Add to Cart | ₹{product.offerPrice}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center mt-20">
              <h4 className="text-red-500 text-lg font-semibold">
                Oops! Nothing matched your search.
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                Try using different keywords or check our full collection.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center flex-wrap gap-2 s:gap-4 mt-14 mb-10">
            <button
              disabled={currPage === 1}
              onClick={() => setCurrPage((prev) => prev - 1)}
              className={`${
                currPage === 1 && "opacity-50 cursor-not-allowed"
              } btn-dark !py-1 !px-3 bg-black text-white font-semibold cursor-pointer`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrPage(index + 1)}
                className={`${
                  currPage === index + 1 && "opacity-50 cursor-not-allowed"
                } bg-white text-black !py-1 !px-3 cursor-pointer`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currPage === totalPages}
              onClick={() => setCurrPage((prev) => prev + 1)}
              className={`${
                currPage === totalPages && "opacity-50 cursor-not-allowed"
              } btn-dark !py-1 !px-3 bg-black text-white font-semibold cursor-pointer`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Collection;
